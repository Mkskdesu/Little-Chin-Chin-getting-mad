import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import SplashScreen from "../../Scenes/SplashScreen/SplashScreen"

const PageRouter:React.FC = () =>{
  return (
    <Routes>
        <Route path="/" element={<Navigate to={"/splash"}/>} />
        <Route path="/splash" element={<SplashScreen/>}/>
    </Routes>
  )
}

export default PageRouter;
