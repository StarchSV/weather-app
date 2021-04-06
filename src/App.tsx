import MainContainer from './components/MainContainer/MainContainer';
import dayImage from './img/city-day-image.png';
import nightImage from './img/city-night-image.png';
import './App.scss';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import { WeatherData } from './interfaces/CommonInterfaces'
import LaunchScreen from './components/LaunchScreen/LaunchScreen';

function App() {
  const [isLoading, setLoading] = useState(true)
  const [isLaunchScreenVisible, setLaunchScreenVisibility] = useState(true)
  const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData)
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=55.75222&lon=37.61556&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`)
      .then(response => response.json())
      .then(result => {
        setWeatherData(result)
        setLoading(false)
      })
    setLoading(false)
  }, [])
  const time = new Date().getHours()
  const showDayImage = time > 6 && time < 20


  return (
    <>
      {isLoading && <Loader/>}
      {isLaunchScreenVisible && <LaunchScreen setVisibility={setLaunchScreenVisibility}/>}
      {!isLoading && !isLaunchScreenVisible && (
        <div className="app-container" style={{ backgroundImage: `url(${showDayImage ? dayImage : nightImage})`}}>
        <MainContainer weatherData={weatherData} />
        </div>
      )}
    </>
  );
}

export default App;
