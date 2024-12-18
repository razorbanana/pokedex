type BaseColumnType<T> = {
    title: string;
    type: string;
    data: (T | undefined)[];
    sortCallback: (a: T, b: T) => 1 | -1;
};

type TableColumnType =
    | BaseColumnType<number> & { type: "number" }
    | BaseColumnType<string> & { type: "string" }
    | BaseColumnType<string> & { type: "icon" };

export default TableColumnType