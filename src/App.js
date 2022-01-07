import MedicationItem from "./components/MedicationItem";
import "./App.css";

function App() {
const medications = [
  { name: "Acutane", date: new Date()}, 
  { name: "Acutane2", date: new Date()}, 
  { name: "Acutane3", date: new Date()}, 
  { name: "Acutane4", date: new Date()}, 
  { name: "Acutane5", date: new Date()}, 
];

  return (
    <div className="App">
      <MedicationItem name={medications[0].name} date={medications[0].date} />
      <MedicationItem name={medications[1].name} date={medications[1].date}/>
      <MedicationItem name={medications[2].name} date={medications[2].date}/>
      <MedicationItem name={medications[3].name} date={medications[3].date}/>
      <MedicationItem name={medications[4].name} date={medications[4].date}/>
    </div>
  );
}

export default App;
