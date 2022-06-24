import MedicationItem from "./components/MedicationItem/MedicationItem";
import NewMedication from "./components/addMedication/MedicationForm";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const medications = [
    { name: "Acutane", date: new Date() },
    { name: "Acutane2", date: new Date() },
  ];

  return (
    <div className="App">
      {/* <NewMedication />
      <MedicationItem name={medications[0].name} date={medications[0].date} />
      <MedicationItem name={medications[1].name} date={medications[1].date} /> */}
      <HomePage />
      
    </div>
  );
}

export default App;
