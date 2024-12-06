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
        observer.subscribe(config.EVENT_NAMES.UPDATE_CATEGORY, (data: unknown) => setCategory(data as Categories))
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_CATEGORY, (data: unknown) => setCategory(data as Categories))
        }
    }, [])
    return (
        <Select value={category} onChange={categoryChange} options={Object.values(config.CATEGORIES)}/>
    )
}

export default CategorySelect