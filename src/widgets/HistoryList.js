import React, { useContext, useEffect } from 'react';
import HistoryContext,{Context} from './HistoryContext';
import { HistoryItem } from './HistoryItem';

 export function HistoryList(props){
    // eslint-disable-next-line
    const[historyState,setHistoryState] = useContext(Context);
    const map = historyState.map((historyItem) => 
    <HistoryItem key={historyItem.key} equation={historyItem.equation} solution={historyItem.solution} type={props.type}/>);
    useEffect(()=>{
        var historyBar = document.getElementById('historyBar'); 
        historyBar.scrollTop = historyBar.scrollHeight;
    });
    return(
        

        <HistoryContext>
            {map}
        </HistoryContext>
    );
}