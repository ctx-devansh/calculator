import React from 'react';
import './numberButton.css';
import {Button} from '@mui/material';

function NumberButton(props){
    function handleClick(){
        console.log("hello");
        document.getElementById('calcTextField').value += props.value;
    }
    return(
        <Button onClick={handleClick} sx={[{height: '60px', width: '60px', bgcolor: 'black', borderRadius: '50%', color: 'white', margin: '5px'},{'&:hover': {backgroundColor: 'grey',}}]}>
            {props.value}
        </Button>
    );
}
export default NumberButton;