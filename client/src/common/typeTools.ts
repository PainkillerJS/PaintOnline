import Pen from "../tools/Pen";
import Rect from "../tools/Rect";
import { EToolsKind } from "../model/toolModel";

export default {
  [EToolsKind.PEN]: Pen,
  [EToolsKind.RECT]: Rect
};
