import { FC, useState } from "react";
import observer from "../../observers/observer";
import config from "../../config/config";

const ProduceErrorButton:FC = () => {
    const [error, setError] = useState("")

    const handleSendError = ():void => {
        observer.emit(config.EVENT_NAMES.SHOW_ERROR, error)
    }

    return (
        <div>
            <label>Error Message</label>
            <input value={error} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setError(e.target.value)}/>
            <button onClick={handleSendError}>Click to error</button>
        </div>
    )
}

export default ProduceErrorButton