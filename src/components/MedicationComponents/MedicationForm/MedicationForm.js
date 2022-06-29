import Card from "../../Utility/Card/Card";
import "./MedicationForm.css";

function NewMedication() {
	const nameChangeHandler = (event) => {
		console.log(event.target.value);
	};
  
	return (
		<Card className="add-med-container">
			<form className="add-med-form">
				<div>
					<label htmlFor="medName"> Medication Name: </label>
					<input
						id="medName"
						type="text"
						onChange={nameChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="dosage"> Dosage in mg: </label>
					<input id="dosage" type="number" min="0" step="0.1" />
				</div>
				<button type="submit" className="submit-med-btn">
					Add Medication
				</button>
			</form>
		</Card>
	);
}

export default NewMedication;
