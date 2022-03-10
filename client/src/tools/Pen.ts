import type { MouseEvent } from "react";

import Tool from "./parents/Tool";
import type { TCanvasTool } from "./types";

type TMouseEventCanvas = MouseEvent<HTMLCanvasElement>;

export default class Pen extends Tool {
  constructor(canvas: TCanvasTool) {
    super(canvas);
    this.listen();
  }

  private listen() {
    if (this.canvas.current) {
      // @ts-ignore
      this.canvas.current.onmousedown = this.mouseDownHandler.bind(this);
      this.canvas.current.onmouseup = this.mouseUpHandler.bind(this);
      // @ts-ignore
      this.canvas.current.onmousemove = this.mouseMoveHandler.bind(this);
    }
  }

  private mouseDownHandler(e: TMouseEventCanvas) {
    this.mouseDown = true;

    this.context?.beginPath();
    this.context?.moveTo(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop);
  }

  private mouseMoveHandler(e: TMouseEventCanvas) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop);
    }
  }

  protected draw(x: number, y: number) {
    if (this.context) {
      this.context.strokeStyle = "black";
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  }
}
