import { makeAutoObservable, observable, action } from "mobx";

import type { ICanvasStore } from "../model/canvasModel";

class CanvasState {
  constructor() {
    makeAutoObservable(this);
  }

  @observable private _canvas: ICanvasStore["canvas"] = null;

  @action setCanvas(canvas: ICanvasStore["canvas"]) {
    this._canvas = canvas;
  }

  getCanvas() {
    return this._canvas;
  }
}

export default new CanvasState();
