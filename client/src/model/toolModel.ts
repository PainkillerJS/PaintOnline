import Tool from "../tools/Tool";

export type TTool = InstanceType<typeof Tool>;

export enum EToolsKind {
  PEN = "pen",
  RECT = "rect"
}
