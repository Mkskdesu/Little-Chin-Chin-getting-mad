import React from "react";
import { BrowserRouter } from "react-router-dom";

import PageRouter from "Global/Router/PageRouter";

import style from "./App.module.scss";
import "Global/Styles/global.scss";


const App:React.FC = () =>{
  return (
    <div className={style.app}>
        <BrowserRouter>
            <PageRouter/>
        </BrowserRouter>
    </div>
  )
}

export default App
