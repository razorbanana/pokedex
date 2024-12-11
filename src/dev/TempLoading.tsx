import { FC, useState } from "react";
import Loading from "../components/common/Loading";

const TempLoading:FC = () => {
    const [loading, setLoading] = useState(false)

    const tempLoadClick = ():void=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }

    if (!loading){
        return <button onClick={tempLoadClick}>Click to load</button>
    }

    return (
        <Loading />
    )
}

export default TempLoading