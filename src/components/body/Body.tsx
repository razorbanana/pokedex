import './body.css'
import { FC, useEffect, useState } from "react"
import observer, { EventNames } from "../../observers/observer"
import categoryModule, { Categories } from "../../modules/categoryModule"
import DefaultCategoryChoice from '../../utility/defaults/DefaultCategoryChoice'

const Body:FC = () => {
    const [category, setCategory] = useState<Categories>(DefaultCategoryChoice())
    console.log(`NEW CATEGORY ${category}`)
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

    const CategoryView:FC = categoryModule.getCategory(category).component

    return (
        <div className='Body'>
            <CategoryView />
        </div>
    )
}

export default Body