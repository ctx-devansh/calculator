import './App.css';
import {Button, TextField} from '@mui/material';
import NumberButton from './widgets/NumberButton';
import OperationButton from './widgets/OperationButton';
function App() {

  var currentTheme = "type1";

  function handleClick(){
    if(currentTheme === "type1"){
      currentTheme = "type2";
    }else{
      currentTheme = "type1";
    }
    console.log(currentTheme);
    const table = document.querySelectorAll("#buttonsTable");
    console.log(table.childNodes);
    for(const row in table.childNodes){
      console.log(row);
      for(const button in row.childNodes){
        console.log(button);
        button.setAttribute("type",currentTheme);
      }
    }
  }

  return (
      <div id="main">
        <Button onClick={handleClick}>Light/Dark</Button>
        <TextField id='calcTextField' className='calc' label="" variant="outlined" ></TextField>
        <table id="buttonsTable">
          <tr>
            <OperationButton id="button" value="AC" type={currentTheme}></OperationButton>
            <NumberButton id="button" value="(" type={currentTheme}/>
            <NumberButton id="button" value=")" type={currentTheme}></NumberButton>
            <OperationButton id="button" value="/" type={currentTheme}></OperationButton>
          </tr>
          <tr>
            <NumberButton id="button" value="7" type={currentTheme}></NumberButton>
            <NumberButton id="button" value="8" type={currentTheme}></NumberButton>
            <NumberButton id="button" value="9" type={currentTheme}></NumberButton>
            <OperationButton id="button" value="*" type={currentTheme}></OperationButton>
          </tr>
          <tr>
            <NumberButton id="button" value="4" type={currentTheme}></NumberButton>
            <NumberButton id="button" value="5" type={currentTheme}></NumberButton>
            <NumberButton id="button" value="6" type={currentTheme}></NumberButton>
            <OperationButton id="button" value="-" type={currentTheme}></OperationButton>
          </tr>
          <tr>
            <NumberButton id="button" value="1" type={currentTheme}></NumberButton>
            <NumberButton id="button" value="2" type={currentTheme}></NumberButton>
            <NumberButton id="button" value="3" type={currentTheme}></NumberButton>
            <OperationButton id="button" value="+" type={currentTheme}></OperationButton>
          </tr>

          <tr>
            <NumberButton id="button" value="0" type={currentTheme}></NumberButton>
            <NumberButton id="button" value="." type={currentTheme}></NumberButton>
            <OperationButton id="button" value="=" type={currentTheme}></OperationButton>
          </tr>
        </table>
      </div>
  );
}
export default App;
