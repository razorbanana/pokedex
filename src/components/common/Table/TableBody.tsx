import { ReactElement } from 'react';
import TableColumnType from '../../../types/componentPropsTypes/Table/TableColumnType';
import TableBodyCell from './TableBodyCell';
import TableDataType from '../../../types/componentPropsTypes/Table/TableDataType';

const TableBody= <T extends TableDataType, >({columns, data}:{columns: TableColumnType<T>[], data:T[]}):ReactElement => {
    return (
        <tbody>
            {
                data.map((obj) => {
                    return (
                        <tr key={JSON.stringify(obj)}>
                            {columns.map(col => <TableBodyCell  key={col.title} obj={obj} objKey={col.key}/>)}
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

export default TableBody;