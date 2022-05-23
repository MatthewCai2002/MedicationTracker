import "./MedicationItem.css";
import Card from "./Card"

function MedicationItem(props) {
    const medicationName = props.name;
    const medicationTime = props.date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    const medicationDate = props.date.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric"})

    return (
        <div className="medication-item">
            <div className="medication-info">
                <h1 className="medication-name"> {medicationName} </h1>
                <div className="date-container">
                    <span className="last-taken"> Last dose taken on: </span>
                    <h2 className="medication-date"> {medicationDate} </h2>
                    <span className="time-at"> at </span>
                    <h2 className="medication-time"> {medicationTime} </h2>
                </div>
            </div> 
            <button className="dose-btn"> Take Next Dose </button>
        </div>
    );
}

export default MedicationItem;