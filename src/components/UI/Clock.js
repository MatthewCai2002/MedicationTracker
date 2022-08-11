import "./Clock.css";
import Date from "./Date";
import Time from "./Time";

function Clock(props) {

    return (
        <div className="clock-container">
            <h2 className="clock__date">
                <Date date={props.date} />
            </h2>
            <h2 className="clock__time">
                <Time date={props.date} />
            </h2>
        </div>

    )
}

export default Clock;