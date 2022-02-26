import "./Controls.component.scss";

const ControlsComponent = (props) => {
  return (
    <div className="controls__container">
      <div className="controls__add-new">{props.children}</div>
    </div>
  );
};

export default ControlsComponent;
