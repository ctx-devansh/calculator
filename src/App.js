import './App.css';
import {useState} from "react";
import {Button, TextField} from '@mui/material';
import NumberButton from './widgets/NumberButton';
import OperationButton from './widgets/OperationButton';
function App() {

  var [currentTheme,setTheme] = useState("type1");

  const backgroundStyle1 = {backgroundColor: "#F5F5F5"};
  const backgroundStyle2 = {backgroundColor: "#000000"};

  const fieldColor1 = {backgroundColor: "#FFFFFF"};
  const fieldColor2 = {backgroundColor: "#3d3d3d", color: "#F5F5F5", fontWeight: "100"};


  function handleClick(){
    if(currentTheme === "type1"){
      setTheme("type2");
    }else{
      setTheme("type1");
    }
  }


  return (
      <div id="main">

        <div id="themeSwitch">
          <Button onClick={()=>handleClick()}>Light/Dark</Button>
        </div>
        <div id="calcContainer" style={currentTheme === "type2" ? backgroundStyle2 : backgroundStyle1}>
          <div id="whiteSpace" style={currentTheme === "type2" ? fieldColor2 : fieldColor1}></div>
          <input id='calcTextField' style={currentTheme === "type2" ? fieldColor2 : fieldColor1}></input>
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
              <OperationButton id="button" value="DEL" type={currentTheme}></OperationButton>
              <NumberButton id="button" value="0" type={currentTheme}></NumberButton>
              <NumberButton id="button" value="." type={currentTheme}></NumberButton>
              <OperationButton id="button" value="=" type={currentTheme}></OperationButton>
            </tr>
          </table>
        </div>
      </div>
  );
}
export default App;
