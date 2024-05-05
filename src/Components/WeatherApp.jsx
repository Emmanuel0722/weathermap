import React, { useEffect, useState } from 'react'
import { WeatherForm } from './WeatherForm';
import { WeatherMainInfo } from './WeatherMainInfo';
import style from "./Css/WeatherApp.module.css";
import { Loading } from './Loading';

export const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `React Weather | ${weather?.location.name?? ''}`;
  }, [weather])

  const loadInfo = async (city = "Santo Domingo") => {
    try {
      const request = await fetch(
        `${process.env.VITE_APP_URL}&key=${process.env.VITE_APP_KEY}&q=${city}`
      );

      const json = await request.json();

      setTimeout(() => {
        setWeather(json)
      }, 2000);

    } catch (error) {
      console.log("Algo malo paso...");
    }
  }

  const onCity = (city) => {
    setWeather(null);
    loadInfo(city);
  }
  
  return (
    <div className={style.Container} >

      <WeatherForm onChangeCity={onCity} />

      {
        weather ? <WeatherMainInfo weather={weather}/>: <Loading />
      }

    </div>
  )
}
