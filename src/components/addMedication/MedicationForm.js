import Card from "../Card/Card";
import "./MedicationForm.css";

function NewMedication() {
  return (
    <Card className="add-med-container">
        <form className="add-med-form">
            <div>
                <label>
                    Medication Name:
                    <input type="text"/>
                </label>
            </div>
            <div>
                <label>
                    Dosage in mg:
                    <input type="number" min="0" step="0.1"/>
                </label>
            </div>
            <button type="submit" className="form-submit-btn">
              Add Medication
            </button>
        </form>
    </Card>
  );
}

export default NewMedication;
