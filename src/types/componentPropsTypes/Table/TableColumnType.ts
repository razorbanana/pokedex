import SortCallbackType from "../../functionTypes/SortCallbackType";

type BaseColumnType<T> = {
    title: string;
    type: string;
    key: keyof T;
    sortCallback?: SortCallbackType<T[keyof T]>
};

type TableColumnType<T> =
    | BaseColumnType<T> & { type: "number" }
    | BaseColumnType<T> & { type: "string" }
    | BaseColumnType<T> & { type: "icon" };

export default TableColumnType