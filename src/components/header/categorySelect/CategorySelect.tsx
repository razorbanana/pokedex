import { FC, useEffect, useState } from "react";
import categoryModule, { Categories } from "../../../modules/categoryModule";
import observer, { EventNames } from "../../../observers/observer";
import DefaultCategoryChoice from "../../../utility/defaults/DefaultCategoryChoice";
import SelectMenu from "../../common/inputs/SelectMenu/SelectMenu";
import SelectMenuOptionsType from "../../../types/componentPropsTypes/SelectMenuOptionsType";
import DefaultVersionObject from "../../../utility/defaults/DefaultVersionObject";

const CategorySelect:FC = () => {
    const [category, setCategory] = useState(DefaultCategoryChoice())
    const [isSelectMenuVisible, setSelectMenuVisibility] = useState<boolean>(false)
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

    const toggleSelectMenuVisibility = ():void => {
        setSelectMenuVisibility(!isSelectMenuVisible)
    }

    const categories: Categories[] = categoryModule.getCategories()
    const categoryOptions: SelectMenuOptionsType = {
        label: "Categories",
        group: categories.map((category:Categories) => {
            const obj = categoryModule.getCategory(category)
            return {
                label: category,
                icon: obj.icon,
                onClick: () => {
                    observer.emit(EventNames.UPDATE_CATEGORY, category)
                    toggleSelectMenuVisibility()
                }
            }
        })
    }
    const defaultVersion = DefaultVersionObject()
    const versionOptions: SelectMenuOptionsType = {
        label: "Versions",
        group: [
            {
                ...defaultVersion,
                onClick: () => console.log("clicked version option")
            }
        ]
    }
    const options = [categoryOptions, versionOptions]


    return (
        <>
            <button onClick={toggleSelectMenuVisibility} className="CategorySelect-Button">{category}</button>
            {isSelectMenuVisible ? <SelectMenu options={options}/> : ""}
        </>
    )
}

export default CategorySelect