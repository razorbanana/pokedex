import { ReactElement } from 'react';
import TableDataType from '../../../types/componentPropsTypes/Table/TableDataType';

const TableBodyCell = <T extends TableDataType,>({obj, objKey}:{obj:T, objKey: keyof T}):ReactElement => {
    return (
        <td>{ obj[objKey] ? obj[objKey] : "---" } </td>
    );
};

export default TableBodyCell;