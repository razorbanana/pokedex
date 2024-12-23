import SortCallbackType from "../../functionTypes/SortCallbackType"

type TableAction<T> = 
| {
    type: "sort",
    payload: {
        key: keyof T,
        sortCallback?: SortCallbackType<T[keyof T]>
    }
}
| {
    type: "reset",
    payload: {
        state: T[]
    }
}

export default TableAction