import React, {useEffect, useState} from 'react';

export const Context = React.createContext();

function HistoryContext({children}){
    const[state,setState] = useState([]);

    useEffect(() => {
        var currHistory = JSON.parse(localStorage.getItem('history'));
        if(currHistory === null){
            localStorage.setItem('history',JSON.stringify(state));
        }else{
            setState(currHistory);
        }
    // eslint-disable-next-line
    },[]);

    return(
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    );
}

export default HistoryContext;