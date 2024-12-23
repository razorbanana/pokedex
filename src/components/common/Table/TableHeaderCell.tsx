import { ReactElement, useState } from 'react';
import TableColumnType from '../../../types/componentPropsTypes/Table/TableColumnType';
import TableAction from '../../../types/componentPropsTypes/Table/TableAction';

type SortOptions = "up" | "down" | "none"

const TableHeaderCell = <T,>({column, dispatch}:{column: TableColumnType<T>, dispatch:React.Dispatch<TableAction<T>>}):ReactElement => {
    const [sortDirection, setSortDirection] = useState<SortOptions>("none")
    const sortIconMap = {
        up: "sortIcons/up.svg",
        down: "sortIcons/down.svg",
        none: "sortIcons/none.svg"
    }

    const toggleSortDirection = () => {
        const nextMap:Record<SortOptions, SortOptions> = {
            up: "down",
            down: "none",
            none: "up"
        }
        const action: TableAction<T> = {
            type: "sort",
            payload: {
                key: column.key,
                sortCallback: column.sortCallback
            }
        }
        dispatch(action)
        setSortDirection(nextMap[sortDirection])
    }

    return (
        <th key={column.title}>{column.title} {column.sortCallback ? <button onClick={toggleSortDirection} className='SortButton'><img src={sortIconMap[sortDirection]} className='SortIcon'/></button> : ""}</th>
    );
};

export default TableHeaderCell;