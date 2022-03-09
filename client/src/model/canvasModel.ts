import type { RefObject } from "react";

export interface ICanvasStore {
  canvas?: RefObject<HTMLCanvasElement> | null;
}
