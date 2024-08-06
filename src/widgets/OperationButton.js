import React, { useContext } from 'react';
import {Button} from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import HistoryContext,{Context} from './HistoryContext';

const type1 = createTheme({
    palette: {
        color1: {
            main: '#FFFFFF',
            light: 'green',
            dark: '#dcdcdc',
            contrastText: '#000000',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                props: { size: "custom" },
                style: { fontSize: "20px", height: "60px", width: "70px", borderRadius: "40px", margin: "5px" }
                }
            ]
        }
    },
});

const type2 = createTheme({
    palette: {
      color1: {
        main: '#4b4b4b',
        light: '#4b4b4b',
        dark: '#717171',
        contrastText: '#FFFFFF',
      },
    },
    components: {
        MuiButton: {
            variants: [
                {
                props: { size: "custom" },
                style: { fontSize: "20px", height: "60px", width: "70px", borderRadius: "40px", margin: "5px" }
                }
            ]
        }
    },
});

const type3 = createTheme({
    palette: {
      color1: {
        main: '#e91d26',
        light: '#4b4b4b',
        dark: '#b5161d',
        contrastText: '#FFFFFF',
      },
    },
    components: {
        MuiButton: {
            variants: [
                {
                props: { size: "custom" },
                style: { fontSize: "20px", height: "60px", width: "70px", borderRadius: "40px", margin: "5px" }
                }
            ]
        }
    },
});



function OperationButton(props){
    // eslint-disable-next-line
    const[historyState,setHistoryState] = useContext(Context);

    function handleClick(){
        try{
            switch(props.value){
                case 'AC':
                    document.getElementById('calcTextField').value = '';
                    break;
                case '+':
                    document.getElementById('calcTextField').value += '+';
                    break;
                case '-':
                    document.getElementById('calcTextField').value += '-';
                    break;
                case '*':
                    document.getElementById('calcTextField').value += '*';
                    break;
                case '/':
                    document.getElementById('calcTextField').value += '/';
                    break;
                case '=':
                    var currEq = document.getElementById('calcTextField').value;
                    // eslint-disable-next-line
                    var currEqSolved = eval(currEq);
                    if(currEq !== ""  && currEqSolved !== "ERROR"){
                        const newHistoryItem = {key:historyState.length+1,equation:currEq,solution:currEqSolved};
                        setHistoryState((prev)=>{
                            let returnArr = [...prev,newHistoryItem];
                            localStorage.setItem('history',JSON.stringify(returnArr));
                            return returnArr;
                        });
                        
                    }
                    document.getElementById('calcTextField').value = currEqSolved;
                    break;
                case 'DEL':
                    var text = document.getElementById('calcTextField').value;
                    document.getElementById('calcTextField').value = text.substring(0,text.length-1);
                    break;
                default:
                    break;
            
            }
        } catch (err){
            document.getElementById('calcTextField').value = 'ERROR';
            
        }
        
    }
    // Return the Operation Button with the correct theme
    return(
        <HistoryContext>
            <ThemeProvider theme={props.type === "type1" ? type1 : props.type === "type3" ? type3 : type2}>
                <Button variant="contained" onClick={handleClick} color="color1" size="custom">
                    {props.value}
                </Button>
            </ThemeProvider>
        </HistoryContext>
    );
}
export default OperationButton;