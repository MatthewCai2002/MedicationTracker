import "./MedicationItem.css";

function MedicationItem(props) {
    const medicationName = props.name;
    const medicationTime = props.date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    const medicationDate = props.date.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric"})

    return (
        <div className="medication-item">
            <div className="medication-info">
                <span className="medication-name"> {medicationName} </span>
                <div>
                    <span className="last-taken"> Last dose taken on: </span>
                    <span className="medication-date"> {medicationDate} </span>
                    <span className="time-at"> at </span>
                    <span className="medication-time"> {medicationTime} </span>
                </div>
            </div> 
            <button className="next-dose"> Take Next Dose </button>
        </div>
    );
}

export default MedicationItem;