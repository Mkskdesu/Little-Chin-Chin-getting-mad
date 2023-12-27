import React from "react"
import { useNavigate } from "react-router-dom";

import image from "Global/Assets/Images/title.png";

import style from "./Title.module.scss";


const Title:React.FC = () =>{

    const navigate = useNavigate();


  return (
    <div className={style.title}>
        <img src={image} alt="" className={style.titleImage} />
        <h2 className={style.start}>クリックしてはじめる...</h2>
    </div>
  )
}

export default Title
