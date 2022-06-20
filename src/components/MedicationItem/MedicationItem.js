import { useState } from "react";
import Card from "../Utility/Card/Card";
import "./MedicationItem.css";

function MedicationItem(props) {
    const [date, setDate] = useState(props.date)

    const medicationName = props.name;
    const medicationDate = date.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric"})
    const medicationTime = date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    
    const updateDateHandler = () => {
        setDate(new Date())
    }

    return (
        <Card className="medication-item">
            <div className="medication-info">
                <h1 className="medication-name"> {medicationName} </h1>
                <div className="date-container">
                    <span className="last-taken"> Last dose was taken on: </span>
                    <h2 className="medication-date"> {medicationDate} </h2>
                    <span className="time-at"> at </span>
                    <h2 className="medication-time"> {medicationTime} </h2>
                </div>
            </div> 
            <button className="dose-btn" onClick={updateDateHandler}> Take Medication </button>
        </Card>
    );
}

export default MedicationItem;