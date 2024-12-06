import { FC, useEffect, useState } from "react";
import observer from "../../observers/observer";
import config, { Categories } from "../../config/config";
import Select from "../inputs/Select";

const CategorySelect:FC = () => {
    const [category, setCategory] = useState("general")
    const categoryChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        observer.emit(config.EVENT_NAMES.UPDATE_CATEGORY, e.target.value)
    }
    useEffect(() => {
        const action = (data: unknown) => setCategory(data as Categories)
        observer.subscribe(config.EVENT_NAMES.UPDATE_CATEGORY, action)
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_CATEGORY, action)
        }
    }, [])
    return (
        <Select value={category} onChange={categoryChange} options={Object.values(config.CATEGORIES)}/>
    )
}

export default CategorySelect