import { FC, useEffect, useState } from "react"
import observer from "../observers/observer"
import config, {Categories} from "../config/config"

const Body:FC = () => {
    const [category, setCategory] = useState('general')
    
    useEffect(() => {
        observer.subscribe(config.EVENT_NAMES.UPDATE_CATEGORY, (data: unknown) => setCategory(data as Categories))
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_CATEGORY, (data: unknown) => setCategory(data as Categories))
        }
    }, [])

    const renderView:() => JSX.Element = () => {
                switch(category){
                    case config.CATEGORIES.GENERAL:
                        return <></>
                    case config.CATEGORIES.ABILITIES:
                        return <></>
                    default:
                        return <></>
                }
            }
    return (
        <div>
            {renderView()}
        </div>
    )
}

export default Body