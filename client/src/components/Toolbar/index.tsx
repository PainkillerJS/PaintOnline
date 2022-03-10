import "./style.scss";
import { EToolsKind } from "../../model/toolModel";
import typeTools from "../../common/typeTools";
import toolState from "../../store/toolState";
import canvasState from "../../store/canvasState";

export const Toolbar = () => {
  const handleChangeTool = (tool: EToolsKind) => () => {
    const canvas = canvasState.getCanvas();

    document.body.className = tool;

    if (canvas) {
      toolState.setTool(new typeTools[tool](canvas));
    }
  };

  return (
    <div className="toolbar">
      <div className="toolbar__btn pen" onClick={handleChangeTool(EToolsKind.PEN)} />
      <div className="toolbar__btn rect" onClick={handleChangeTool(EToolsKind.RECT)} />
      <div className="toolbar__btn circle" onClick={handleChangeTool(EToolsKind.CIRCLE)} />
      <div className="toolbar__btn eraser" onClick={handleChangeTool(EToolsKind.ERASER)} />
      <div className="toolbar__btn line" onClick={handleChangeTool(EToolsKind.LINE)} />
      <input type="color" />
      <div className="toolbar__btn undo" />
      <div className="toolbar__btn redo" />
      <div className="toolbar__btn save" />
    </div>
  );
};
