import "./Button.css";

function Button(props) {
    let cName = "base-button " + props.className
    return (
        <button className={cName}>
            {props.children}
        </button>
    );
}

export default Button;