import SortCallbackType from '../../../../types/functionTypes/SortCallbackType';
import TableAction from '../../../../types/componentPropsTypes/Table/TableAction';

const sortByKey = <U, >(key:keyof U, sortCallback: SortCallbackType<U[keyof U]>):SortCallbackType<U> => {
    return (a:U, b:U) => sortCallback(a[key] as U[keyof U], b[key] as U[keyof U])
}

const reducer = <T,>(state: T[], action:TableAction<T>) => {
    switch (action.type) {
        case "sort":
            { 
                if (action.payload.sortCallback){
                    return state.sort(sortByKey<T>(action.payload.key, action.payload.sortCallback)) 
                }
                return state
            }
        case "reset":
            { 
                return action.payload.state
            }
        default:
            throw new Error(`Unknown action type: ${action}`);
    }
};


export default reducer;