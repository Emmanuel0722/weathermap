import React, { useState } from 'react';
import style from "./Css/WeatherForm.module.css"

export const WeatherForm = ({onChangeCity}) => {

  const [city, setCity] = useState("");

  const onChangeHandled = (e) => {
    if (e.target.value !== "" || e.target.value !== undefined ) {
      setCity(e.target.value);
    }else{
      alert("No es permitido campos vacios...")
    }
  }

  const HandleCity = (e) => {
    e.preventDefault();

    onChangeCity(city)
  }

  return (
    <form onSubmit={HandleCity} >
      <input className={style.ContainerInfoInput} onChange={onChangeHandled} type="text" required />
    </form>
  )
}
