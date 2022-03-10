import Pen from "./Pen";
import type { TCanvasTool } from "./types";

export default class Eraser extends Pen {
  constructor(canvas: TCanvasTool) {
    super(canvas);
  }

  protected draw(x: number, y: number) {
    if (this.context) {
      this.context.strokeStyle = "white";
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  }
}
