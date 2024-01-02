import './numberButton.css';
import {Button} from '@mui/material';
function NumberButton(props){
    function handleClick(){
        document.getElementById('calcTextField').value += props.value;
    }
    return(
        <Button className="" variant="contained" onClick={handleClick}>
            {props.value}
        </Button>
    );
}
export default NumberButton;