import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import SplashScreen from "../../Scenes/SplashScreen/SplashScreen"
import Title from "Scenes/Title/Title"

const PageRouter:React.FC = () =>{
  return (
    <Routes>
        <Route path="/" element={<Navigate to={"/splash"}/>} />
        <Route path="/splash" element={<SplashScreen/>}/>
        <Route path="/title" element={<Title/>}/>
    </Routes>
  )
}

export default PageRouter;
