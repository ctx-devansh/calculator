import React, {useState} from 'react';

export const Context = React.createContext();

function HistoryContext({children}){
    const[state,setState] = useState([]);
    return(
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    );
}

export default HistoryContext;