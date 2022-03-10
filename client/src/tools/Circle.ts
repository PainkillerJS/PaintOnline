import type { MouseEvent } from "react";

import Tool from "./parents/Tool";
import type { TCanvasTool } from "./types";

type TMouseEventCanvas = MouseEvent<HTMLCanvasElement>;

export default class Circle extends Tool {
  constructor(canvas: TCanvasTool) {
    super(canvas);
    this.listen();
  }

  private startX: number = 0;
  private startY: number = 0;
  private savedImage: string | undefined = "";

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

    this.startX = e.pageX - e.currentTarget.offsetLeft;
    this.startY = e.pageY - e.currentTarget.offsetTop;
    this.savedImage = this.canvas.current?.toDataURL();
  }

  private mouseMoveHandler(e: TMouseEventCanvas) {
    if (this.mouseDown) {
      const currentX = e.pageX - e.currentTarget.offsetLeft;
      const currentY = e.pageY - e.currentTarget.offsetTop;
      const width = currentX - this.startX;
      const height = currentY - this.startY;
      const radius = Math.sqrt(width ** 2 + height ** 2);

      this.draw(this.startX, this.startY, radius);
    }
  }

  private draw(x: number, y: number, radius: number) {
    if (this.savedImage) {
      const img = new Image();

      img.src = this.savedImage;
      img.onload = () => {
        if (this.context) {
          this.context.clearRect(0, 0, this.canvas.current?.width || 0, this.canvas.current?.height || 0);
          this.context.drawImage(img, 0, 0, this.canvas.current?.width || 0, this.canvas.current?.height || 0);
          this.context.beginPath();

          this.context.strokeStyle = "black";
          this.context.arc(x, y, radius, 0, 2 * Math.PI);
          this.context.stroke();
        }
      };
    }
  }
}
