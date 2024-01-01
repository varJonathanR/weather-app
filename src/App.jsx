import { useEffect, useState } from "react";
import "./App.css";
import { CURRENT_WEATHER_API_URL, FORECAST_WEATHER_API_URL, FetchAPI } from "./utils/API";
import Aside from "./containers/Aside";
import Main from "./containers/Main";

function App() {
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [showInCelsius, setShowInCelsius] = useState(true);

  console.log(forecastData)

    useEffect(() => {
      FetchAPI(CURRENT_WEATHER_API_URL, 60.192059, 24.945831, setCurrentData)
      FetchAPI(FORECAST_WEATHER_API_URL, 60.192059, 24.945831, setForecastData)
    }, []);

  return (
    <>
      <Aside 
        currentData={currentData}
        setCurrentData={setCurrentData}
        setForecastData={setForecastData}
        tempScale={showInCelsius} />
      <Main 
        currentData={currentData}
        forecastData={forecastData}
        tempScale={showInCelsius}
        setTempScale={setShowInCelsius} />
    </>
  );
}

export default App;
