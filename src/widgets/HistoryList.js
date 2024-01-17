import React, { useContext } from 'react';
import HistoryContext,{Context} from './HistoryContext';
import { HistoryItem } from './HistoryItem';

 export function HistoryList(props){
    const[historyState,setHistoryState] = useContext(Context);
    const map = historyState.map(historyItem => 
    <HistoryItem equation={historyItem.equation} solution={historyItem.solution} type={props.type}/>);
    return(
        <HistoryContext>
            {map}
        </HistoryContext>
    );
}