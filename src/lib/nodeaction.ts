import { draggable } from '@neodrag/svelte';
import type { Node } from "$lib/node"
import type { Action } from 'svelte/action';

export const nodeaction: Action<HTMLElement, Node> = (elem, node) => {
  if (!node) return

  const drag = draggable(elem, {
    position: node.position,
    onDrag: (event) => {
      node.position.x = event.offsetX;
      node.position.y = event.offsetY;
    }
  })

  elem.addEventListener("dblclick", () => {
    node.selected = !node.selected;
  })

  return {
    destroy: () => {
      drag.destroy()
    }
  }
};