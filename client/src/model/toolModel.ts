import Tool from "../tools/parents/Tool";

export type TTool = InstanceType<typeof Tool>;

export enum EToolsKind {
  PEN = "pen",
  RECT = "rect",
  ERASER = "eraser",
  CIRCLE = "circle",
  LINE = "line"
}
