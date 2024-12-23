import './Table.css'
import { ReactElement, useEffect, useReducer } from 'react';
import TableColumnType from '../../../types/componentPropsTypes/Table/TableColumnType';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableDataType from '../../../types/componentPropsTypes/Table/TableDataType';
import reducer from './TableReducer/tableReducer';

type TableProps<T> = {
  title: string;
  subtitle: string;
  columns: TableColumnType<T>[];
  data: T[];
};


const Table = <T extends TableDataType,>({title, subtitle, columns, data}:TableProps<T>):ReactElement => {
    const [state, dispatch] = useReducer(reducer<T>, data)
    useEffect(() => {
        dispatch({ type: "reset", payload: {state: data} });
    }, [data]);

    return (
        <div className='TableContainer'>
            <div className='TableTitle'>{title}</div>
            <div className='TableSubTitle'>{subtitle}</div>
            <table className='Table'>
                <TableHeader columns={columns} dispatch={dispatch}/>
                <TableBody columns={columns} data={state}/>
            </table>
        </div>
    );
};

export default Table;