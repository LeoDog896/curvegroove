export interface Position { x: number; y: number; }

export type NodeBase = (
  { type: "text", content: string } |
  { type: "image", src: string, alt: string } |
  { type: "group", nodes: Node[] } |
  { type: "rectangle", width: number, height: number } |
  { type: "oval", width: number, height: number }
);

export type Node = {
  position: Position;
  selected?: boolean;
} & NodeBase;