import React from 'react';
import {Button} from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

function OperationButton(props){
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
                    document.getElementById('calcTextField').value = eval(document.getElementById('calcTextField').value);
                    break;
                case 'DEL':
                    var text = document.getElementById('calcTextField').value;
                    document.getElementById('calcTextField').value = text.substring(0,text.length-1);
                default:
                    break;
            
            }
        } catch (err){
            document.getElementById('calcTextField').value = 'ERROR';
            
        }
        
    }
    // Return the Operation Button with the correct theme
    return(
        <ThemeProvider theme={props.type === "type1" ? type1 : type2}>
            <Button variant="contained" onClick={handleClick} color="color1" size="custom">
                {props.value}
            </Button>
        </ThemeProvider>
    );
}
export default OperationButton;