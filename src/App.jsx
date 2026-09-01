import WeatherForecast from './components/WeatherForecast/WeatherForecast';

import './App.css';

import sun from './assets/sun.svg';

const weatherForecasts = [
  {
    day: 'Mon',
    img: sun,
    imgAlt: 'sun',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: sun,
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: sun,
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: sun,
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: sun,
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

const App = () => {
  return (
    <>
      <h1>Local Weather</h1>

      <section>
        {weatherForecasts.map((forecast) => (
          <WeatherForecast
            day={forecast.day}
            img={forecast.img}
            imgAlt={forecast.imgAlt}
            conditions={forecast.conditions}
            time={forecast.time}
          />
        ))}
      </section>
    </>
  );
};

export default App;