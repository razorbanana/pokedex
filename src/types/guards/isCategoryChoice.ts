import { Categories } from "../../modules/categoryModule"

const isCategoryChoice = (category: string):category is Categories => {
    return Object.values(Categories).includes(category as Categories)
}

export default isCategoryChoice