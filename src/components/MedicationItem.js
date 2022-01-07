import "./MedicationItem.css";

function MedicationItem() {
    return (
        <div className="medication-item">
            <h2 className="medication-item__name"> Acutane </h2>
            <span className="medication-item__last-taken"> Last dose taken on: Wednesday at 4:00pm</span>
            <button className="medication-itme__next-dose"> Take Next Dose </button>
        </div>
    );
}

export default MedicationItem;