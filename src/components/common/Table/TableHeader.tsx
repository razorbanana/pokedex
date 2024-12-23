import { ReactElement } from 'react';
import TableColumnType from '../../../types/componentPropsTypes/Table/TableColumnType';
import TableHeaderCell from './TableHeaderCell';
import TableAction from '../../../types/componentPropsTypes/Table/TableAction';


const TableHeader = <T,>({columns, dispatch}:{columns: TableColumnType<T>[], dispatch:React.Dispatch<TableAction<T>>}):ReactElement => {
    return (
        <thead>
            <tr>
                {columns.map((col) => {
                    return(
                        <TableHeaderCell key={col.title} column={col} dispatch={dispatch}/>
                    )
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;