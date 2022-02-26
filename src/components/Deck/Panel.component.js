import './Panel.component.css';

const PanelComponent = (props) => {
    return (
        <div className="panel__container">
            {props.children}
        </div>
    )
}

export default PanelComponent;