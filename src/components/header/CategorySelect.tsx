import { FC, useEffect, useState } from "react";
import Select from "../inputs/Select";
import categoryModule, { Categories } from "../../modules/categoryModule";
import observer, { EventNames } from "../../observers/observer";
import DefaultCategoryChoice from "../../utility/defaults/DefaultCategoryChoice";
import isCategoryChoice from "../../types/guards/isCategoryChoice";


const CategorySelect:FC = () => {
    const [category, setCategory] = useState(DefaultCategoryChoice())
    const categoryChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        if (isCategoryChoice(e.target.value)){
            observer.emit(EventNames.UPDATE_CATEGORY, e.target.value)
        }
    }
    useEffect(() => {
        const action = (data?: Categories) => {
            if (data){
                setCategory(data)
            }
        }
        observer.subscribe(EventNames.UPDATE_CATEGORY, action)
        return () => {
            observer.unsubscribe(EventNames.UPDATE_CATEGORY, action)
        }
    }, [])
    return (
        <Select value={category} onChange={categoryChange} options={categoryModule.getCategories()}/>
    )
}

export default CategorySelect