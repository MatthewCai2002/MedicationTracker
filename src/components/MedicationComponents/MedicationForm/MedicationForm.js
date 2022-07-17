import { useState } from "react";
import Card from "../../Utility/Card/Card";
import "./MedicationForm.css";

function NewMedication() {
	const [medName, setMedName] = useState("");
	const [dosage, setDosage] = useState("");

	const nameChangeHandler = (event) => {
		setMedName(event.target.value);
	};

	const dosageChangeHandler = (event) => {
		setDosage(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const medData = {
			name: medName,
			dosage: dosage,
		};
		setDosage('')
		setMedName('')
		console.log(medData)
	};

	return (
		<Card className="add-med-container">
			<form className="add-med-form" onSubmit={submitHandler}>
				<div>
					<label htmlFor="medName"> Medication Name: </label>
					<input
						id="medName"
						type="text"
						value={medName}
						onChange={nameChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="dosage"> Dosage in mg: </label>
					<input
						id="dosage"
						type="number"
						min="0"
						step="0.1"
						value={dosage}
						onChange={dosageChangeHandler}
					/>
				</div>
				<button type="submit" className="submit-med-btn">
					Add Medication
				</button>
			</form>
		</Card>
	);
}

export default NewMedication;
