import { useState } from "react";
import "./MedicationItem.css";
import Date from "../UI/Date";
import Time from "../UI/Time";


function MedicationItem(props) {
    const medicationName = props.name;
    const [date, setDate] = useState(props.date);

    const updateDateHandler = () => {
        setDate(new Date());       
    }

    return (
        <div className="medication-item">
            <div className="medication-info">
                <span className="medication-name"> {medicationName} </span>
                <div className="medication-last-taken">
                    <span className="last-taken"> Last dose taken on: </span>
                    <span className="medication-date"> <Date date={date}/> </span>
                    <span className="time-at"> at </span>
                    <span className="medication-time"> <Time date={date}/> </span>
                </div>
            </div> 
            <button className="next-dose" onClick={updateDateHandler}> Take Next Dose </button>
        </div>
    );
}

export default MedicationItem;