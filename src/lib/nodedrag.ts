import { draggable } from '@neodrag/svelte';
import type { Node } from "$lib/node"

export const nodedrag = (elem: HTMLElement, node: Node) => {
  return draggable(elem, {
    position: node.position,
    onDrag: (event) => {
      node.position.x = event.offsetX;
      node.position.y = event.offsetY;
    }
  })
};