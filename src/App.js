import "./App.css";
import  Summary from "./containers/Summary";
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
