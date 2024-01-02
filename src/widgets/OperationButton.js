import React from 'react';
import {Button} from '@mui/material';

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
                default:
                    document.getElementById('calcTextField').value = '';
                    break;
            
            }
        } catch (err){
            document.getElementById('calcTextField').value = 'ERROR';
        }
        
    }
    return(
        <Button variant="contained" onClick={handleClick} sx={[{height: '60px', width: '60px', bgcolor: 'black', borderRadius: '50%', color: 'white', margin: '5px'},{'&:hover': {backgroundColor: 'grey',}}]}>
            {props.value}
        </Button>
    );
}
export default OperationButton;