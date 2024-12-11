import { FC, useEffect, useState } from "react";
import "./ErrorSlider.css"
import observer from "../../observers/observer";
import config from "../../config/config";

const ErrorSlider:FC = () => {
    const [error, setError] = useState("")

    useEffect(() => {
        const action = (data:unknown) => {
            setError(data as string)
            setTimeout(()=>setError(""), config.ERROR_SLIDER_TIMEOUT)
        }
        observer.subscribe(config.EVENT_NAMES.SHOW_ERROR, action)
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.SHOW_ERROR, action)
        }
    }, [])

    if (error.length === 0){
        return (<></>)
    }
    return (
        <div className="ErrorSlider">
            <p>{error}</p>
        </div>
    )
}

export default ErrorSlider