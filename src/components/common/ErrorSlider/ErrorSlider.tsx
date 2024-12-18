import { FC, useEffect, useState } from "react";
import "./ErrorSlider.css"
import observer, { EventNames } from "../../../observers/observer";
import config from "../../../config/config";

const ErrorSlider:FC = () => {
    const [error, setError] = useState("")

    useEffect(() => {
        const action = (data?:string) => {
            if (data){
                setError(data)
                setTimeout(()=>setError(""), config.ERROR_SLIDER_TIMEOUT)
            }
        }
        observer.subscribe(EventNames.SHOW_ERROR, action)
        return () => {
            observer.unsubscribe(EventNames.SHOW_ERROR, action)
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