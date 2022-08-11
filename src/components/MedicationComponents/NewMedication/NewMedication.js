import React from 'react'
import MedicationForm from '../MedicationForm/MedicationForm'

export default function NewMedicaiton(props) {

  const saveFormInputsHandler = (enteredMedicationData) => {
    const medicationData = {
      ...enteredMedicationData,
    }
    props.onSave(medicationData)

  }
  return (
    <div>
        <MedicationForm onSave={saveFormInputsHandler}/>
    </div>
  )
}
