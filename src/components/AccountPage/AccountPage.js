import React, { useState } from "react";
import MedicationItem from "../MedicationComponents/MedicationItem/MedicationItem";
import NewMedication from "../MedicationComponents/NewMedication/NewMedication";

const DUMMY_MEDS = [
	{
    id: "test1",
		name: "Acutane",
		dosage: 40,
		date: new Date(),
	},
	{
    id: "test2",
		name: "Acutane2",
		dosage: 40,
		date: new Date(),
	},
];

export default function AccountPage() {
	const [medications, setMedications] = useState(DUMMY_MEDS);
	const getMedicationDataHandler = (enteredMedicationData) => {
		const medicationData = {
			...enteredMedicationData,
		};

		setMedications((prevMeds) => {
			return [medicationData, ...prevMeds];
		});
	};

	return (
		<div>
			<NewMedication onSave={getMedicationDataHandler} />
			{medications.map((medication) => {
				return (
					<MedicationItem
            key={medication.id}
						name={medication.name}
            dosage={medication.dosage}
						date={medication.date}
					/>
				);
			})}
		</div>
	);
}
