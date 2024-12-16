import { FC, useEffect, useState } from "react"
import observer, { EventNames } from "../observers/observer"
import categoryModule, { Categories } from "../modules/categoryModule"

const Body:FC = () => {
    const [category, setCategory] = useState('general')
    
    useEffect(() => {
        const action = (data?: Categories) => {
            if (data){
                setCategory(data)
            }
        }
        observer.subscribe(EventNames.UPDATE_CATEGORY, action)
        return () => {
            observer.unsubscribe(EventNames.UPDATE_CATEGORY, (data: unknown) => setCategory(data as Categories))
        }
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const renderView:() => FC = () => {
        return categoryModule.getCategory(category as Categories).component
    }
    return (
        <div>
            Ill fix you some day
        </div>
    )
}

export default Body