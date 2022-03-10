import type { TCanvasTool } from "../types";

export default class Tool {
  constructor(canvas: TCanvasTool) {
    this.canvas = canvas;
    this.context = canvas.current?.getContext("2d");
    this.destroyEvent();
  }

  protected mouseDown: boolean = false;
  protected canvas: TCanvasTool;
  protected context;

  protected mouseUpHandler() {
    this.mouseDown = false;
  }

  private destroyEvent() {
    if (this.canvas.current) {
      this.canvas.current.onmousedown = null;
      this.canvas.current.onmouseup = null;
      this.canvas.current.onmousemove = null;
    }
  }
}
