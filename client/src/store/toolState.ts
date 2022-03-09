import { makeAutoObservable, action, observable } from "mobx";
import type { TTool } from "../model/toolModel";

class ToolState {
  constructor() {
    makeAutoObservable(this);
  }

  @observable private tool: TTool | undefined;

  @action setTool(tool: TTool) {
    this.tool = tool;
  }
}

export default new ToolState();
