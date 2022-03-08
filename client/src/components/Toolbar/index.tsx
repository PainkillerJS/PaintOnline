import "./style.scss";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar__btn pen" />
      <div className="toolbar__btn rect" />
      <div className="toolbar__btn circle" />
      <div className="toolbar__btn eraser" />
      <div className="toolbar__btn line" />
      <input type="color" />
      <div className="toolbar__btn undo" />
      <div className="toolbar__btn redo" />
      <div className="toolbar__btn save" />
    </div>
  );
};
