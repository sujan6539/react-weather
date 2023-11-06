import "./App.css";
import  Summary from "../src/containers/Summary/Summary";
import fetchWeatherData from "./services/api/weatherApi";

function App() {
  {fetchWeatherData()}
  return (
    <div className="App">
      <Summary></Summary>
    </div>
  );
}

export default App;
