import React from 'react';
import {Button} from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';

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
                props: { size: "extraSmall" },
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
                props: { size: "extraSmall" },
                style: { fontSize: "20px", height: "60px", width: "70px", borderRadius: "40px", margin: "5px" }
                }
            ]
        }
    },
});

function NumberButton(props){
    function handleClick(){
        document.getElementById('calcTextField').value += props.value;
    }
    // Return the Number Button with the correct theme
    return(
        <ThemeProvider theme={props.type === "type1" ? type1 : type2}>
            <Button variant="contained" onClick={handleClick} color="color1" size="extraSmall">
                {props.value}
            </Button>
        </ThemeProvider>
    );


}
export default NumberButton;