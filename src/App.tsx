import MainContainer from './components/MainContainer/MainContainer';
import dayImage from './img/city-day-image.png';
import nightImage from './img/city-night-image.png';
import './App.scss';



function App() {
  const time = new Date().getHours()
  const showDayImage = time > 6 && time < 20
  return (
    <div className="app-container" style={{ backgroundImage: `url(${showDayImage ? dayImage : nightImage})`}}>
      <MainContainer/>
    </div>
  );
}

export default App;
