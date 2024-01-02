import './App.css';
import {TextField} from '@mui/material';
import NumberButton from './widgets/NumberButton';
import OperationButton from './widgets/OperationButton';
function App() {
  return (
      <div id="main">
        <TextField id='calcTextField' className='calc' label="" variant="outlined" ></TextField>
        <table id="buttonsTable">
          <tr>
            <OperationButton value="AC"></OperationButton>
            <NumberButton value="(" />
            <NumberButton value=")"></NumberButton>
            <OperationButton value="/"></OperationButton>
          </tr>
          <tr>
            <NumberButton value="7"></NumberButton>
            <NumberButton value="8"></NumberButton>
            <NumberButton value="9"></NumberButton>
            <OperationButton value="*"></OperationButton>
          </tr>
          <tr>
            <NumberButton value="4"></NumberButton>
            <NumberButton value="5"></NumberButton>
            <NumberButton value="6"></NumberButton>
            <OperationButton value="-"></OperationButton>
          </tr>
          <tr>
            <NumberButton value="1"></NumberButton>
            <NumberButton value="2"></NumberButton>
            <NumberButton value="3"></NumberButton>
            <OperationButton value="+"></OperationButton>
          </tr>

          <tr>
            <NumberButton value="0"></NumberButton>
            <NumberButton value="."></NumberButton>
            <OperationButton value="="></OperationButton>
          </tr>
        </table>
      </div>
  );
}
export default App;
