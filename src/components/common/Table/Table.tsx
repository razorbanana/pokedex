import './Table.css'
import { FC } from 'react';
import TableColumnType from '../../../types/componentPropsTypes/Table/TableColumnType';

const Table: FC<{title: string, subtitle:string, columns: TableColumnType[]}> = ({title, subtitle, columns}) => {
    return (
        <div className='TableContainer'>
            <div className='TableTitle'>{title}</div>
            <div className='TableSubTitle'>{subtitle}</div>
            <table className='Table'>
                <thead>
                    <tr>
                        {columns.map(col => <th key={col.title}>{col.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {columns[0].data.map((_, index) => {

                        return(
                            <tr key={index}>
                                {
                                    columns.map((column) => <td key={column.title}>{column.data[index]?column.data[index]:"---"}</td>)
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;