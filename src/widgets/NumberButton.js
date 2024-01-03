import React from 'react';
import {Button} from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const type1 = createTheme({
  palette: {
    color1: {
      main: 'red',
      light: 'green',
      dark: 'blue',
      contrastText: '#FFFFFF',
    },
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
  });

function NumberButton(props){
    function handleClick(){
        console.log("hello");
        document.getElementById('calcTextField').value += props.value;
    }

    if(props.type === "type1"){
        return(
            <ThemeProvider theme={type1}>
                <CssBaseline />
                <Button variant="contained" onClick={handleClick} color="color1">
                    {props.value}
                </Button>
            </ThemeProvider>
        );
    }else{
        return(
            <ThemeProvider theme={type2}>
                <CssBaseline />
                <Button variant="contained" onClick={handleClick} color="color1">
                    {props.value}
                </Button>
            </ThemeProvider>
        );
    }


}
export default NumberButton;