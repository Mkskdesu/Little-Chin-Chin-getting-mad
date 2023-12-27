import React from "react"
import { useNavigate } from "react-router-dom";

import style from "./SplashScreen.module.scss";


const SplashScreen:React.FC = () =>{

    const [display,setDisplay] = React.useState(0);

    const navigate = useNavigate();

    let effectTimeout:NodeJS.Timeout;

    React.useEffect(()=>{
        effectTimeout = setTimeout(() => {
            if(display == 0) setDisplay(1);
            else navigate("/title");
        }, 5000);

        return()=>{
            clearTimeout(effectTimeout);
        }

    },[display]);

  return (
    <div className={style.splash}>
        {
            display == 0 ?
            <div className={style.logo}>
                <img src="/public/pippi.png" alt="" />
                <h1>DUCK Gaming</h1>
            </div> : 
            <div className={style.caution}>
                点滅や光の刺激により,目の痛みや痙攣などを起こす場合があります。症状のある方はご注意ください。<br />
                長時間のプレイは控え,適度に休憩を取るようにしてください。頭痛やめまい,疲労感などの体調不良を感じたときはすぐにプレイを中止してください。症状が改善しない場合は,医師に相談してください。<br />
                ゲームプレイ時には,必ずルールやマナー,利用規約を遵守し,すべてのプレイヤーが快適に遊べるよう心がけてください。<br />
                このゲームには全年齢対象ではない表現が含まれています。十分な注意を払った上でプレイしてください。
            </div>
        }
    </div>
  )
}

export default SplashScreen
