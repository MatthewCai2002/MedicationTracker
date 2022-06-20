import "./GetStartedBtn.css";

function GetStartedBtn(props) {
    let cName = "get-started-btn " + props.className
    return (
        <button className={cName}>
            Get Started
        </button>
    );
}

export default GetStartedBtn;