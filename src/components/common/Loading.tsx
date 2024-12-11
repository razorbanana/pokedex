import { FC, useEffect } from "react";
import "./Loading.css"
import config from "../../config/config";

const Loading:FC = () => {

    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = ""
        }
    },[])

    return (
        <div className="LoadingScreen page-entered">
            <div>
                <img src={config.LOADING_ICON_URL} alt="Loading Icon" />
            </div>
        </div>
    )
}

export default Loading