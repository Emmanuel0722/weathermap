import style from "./Css/Loading.module.css";
import React from 'react'

export const Loading = () => {
  return (
    <div className={style.loadingContainer}>
      <div className={style.loader} >
        <div>

        </div>
      </div>
    </div>
  )
}
