import React from 'react';
import style from "./Css/WeatherMainInfo.module.css";

export const WeatherMainInfo = ({ weather }) => {
  
  // console.log(weather);
  // console.log(weather?.location.lat);

  return (
    <div className={style.ContainerInfo}>
      
      <div className={style.titleContainer} >
        <h1 className={style.title}>{weather?.location.name}</h1>
        <h2 className={style.title1}>{weather?.location.country}</h2>
      </div>

      <div className={style.ContainerInfoText} >
        <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} width='128' />
        <ul className={style.ContainerInfoUl} >
          <li className={style.title2} >{weather?.current.condition.text}</li>
          <li className={style.title}>
            {weather?.current.temp_f}
          </li>
        </ul>
      </div>

      <iframe
        title='Mapa'
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d!2d${weather?.location.lon}6!3d${weather?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!%!2s${weather?.location.name}!5e0!3m2!1ses-419!2sdo!5m2!1ses-419!2sdo`}
        width="600"
        height="450"
        style={{ border:0 }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>

    </div>
  )
}
