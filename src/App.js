import "./App.css";
import  Summary from "../src/containers/Summary/Summary";
import fetchWeatherData from "./services/api/weatherApi";
import NavComponent from "../src/containers/Nav/Nav"

function App() {
  {fetchWeatherData()}
  return (
    <div className="App">
      <Summary></Summary>
      <NavComponent></NavComponent>
    </div>
  );
}

export default App;
