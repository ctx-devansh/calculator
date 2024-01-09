import './App.css';
import {useState} from "react";
import {Button, TextField} from '@mui/material';
import NumberButton from './widgets/NumberButton';
import OperationButton from './widgets/OperationButton';
function App() {

  var [currentTheme,setTheme] = useState("type2");

  function handleClick(){
    if(currentTheme === "type1"){
      setTheme("type2");
      document.getElementById("mainType1").setAttribute("id","mainType2");
    }else{
      setTheme("type1");
      document.getElementById("mainType2").setAttribute("id","mainType1");
    }
  }

  return (
      <div id="mainType2">
        <Button onClick={handleClick}>Light/Dark</Button>
        <div id="calcContainer">
          <TextField id='calcTextField' label="" variant="outlined" fullWidth helperText></TextField>
        </div>
        
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
