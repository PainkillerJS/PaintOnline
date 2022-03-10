import Pen from "../tools/Pen";
import Rect from "../tools/Rect";
import Eraser from "../tools/Eraser";
import Circle from "../tools/Circle";
import Line from "../tools/Line";

import { EToolsKind } from "../model/toolModel";

export default {
  [EToolsKind.PEN]: Pen,
  [EToolsKind.RECT]: Rect,
  [EToolsKind.ERASER]: Eraser,
  [EToolsKind.CIRCLE]: Circle,
  [EToolsKind.LINE]: Line
};
