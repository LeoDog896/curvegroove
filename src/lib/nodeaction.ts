import { draggable } from '@neodrag/svelte';
import type { Node } from "$lib/node"

export const nodeaction = (elem: HTMLElement, node: Node) => {
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