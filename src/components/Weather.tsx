import React, { FC } from 'react';
import { WeatherData } from '../store/types';

import location from "./imgs/location.gif"
import temp from "./imgs/temp.gif"
import humid from "./imgs/humid.gif"
import pressure from "./imgs/pressure.gif"
import wind from "./imgs/wind.gif"


interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheitData = (data.main.temp * 1.8 - 459.67).toFixed(3);
  const celsiusData = (data.main.temp - 273.15).toFixed(3);

  return(
    <section className="section">
      <div className="container" style={{border:"2px solid aqua",borderRadius:"10px"}}>
      
        <h1 className="title has-text-centered" style={{marginBottom: 50}}>
          <img src={location} width="20px" alt="medium"/> {data.name} - {data.sys.country}
          </h1>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              
              <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
              <p className="heading">{data.weather[0].description}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading"> <img src={temp} width="30px" alt=""/>Temperature</p>
              <div className="title">
                <p className="mb-2">{data.main.temp}K</p>
                <p className="mb-2">{fahrenheitData}<sup>&#8457;</sup></p>
                <p>{celsiusData}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
            <p><img src={humid} width="20px" alt=""/> Humidity</p>
              <p className="title">{data.main.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading"><img src={pressure} width="20px" alt=""/> Pressure</p>
              <p className="title">{data.main.pressure}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading"><img src={wind} width="20px" alt=""/> wind</p>
              <p className="title">{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;