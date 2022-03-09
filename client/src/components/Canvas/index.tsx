import "./style.scss";

import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import canvasState from "../../store/canvasState";

export const Canvas = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvasState.setCanvas(canvasRef);
  }, []);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={900} height={550} />
    </div>
  );
});
