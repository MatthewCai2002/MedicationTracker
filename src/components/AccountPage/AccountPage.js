import React from 'react'
import MedicationItem from '../MedicationItem/MedicationItem'
import NewMedication from '../addMedication/MedicationForm'

export default function AccountPage() {
    const medications = [
        { name: "Acutane", date: new Date() },
        { name: "Acutane2", date: new Date() },
    ];

  return (
    <div>
      <NewMedication />
      <MedicationItem name={medications[0].name} date={medications[0].date} />
      <MedicationItem name={medications[1].name} date={medications[1].date} />
    </div>
  )
}
