import './App.css';
import {useState,useContext} from "react";
import {Button} from '@mui/material';
import NumberButton from './widgets/NumberButton';
import OperationButton from './widgets/OperationButton';
import HistoryContext from './widgets/HistoryContext';
import { HistoryList } from './widgets/HistoryList';

function App() {

  var [currentTheme,setTheme] = useState("type1");
  var [historyVisible, setHistoryVisible] = useState("false");

  const backgroundStyle1 = {backgroundColor: "#FFFFFF"};
  const backgroundStyle2 = {backgroundColor: "#252525"};  

  const calcStyle1 = {backgroundColor: "#F5F5F5", boxShadow: "7px 10px 40px #000000"};
  const calcStyle2 = {backgroundColor: "#000000", boxShadow: "7px 10px 40px #000000"};

  const fieldColor1 = {backgroundColor: "#FFFFFF"};
  const fieldColor2 = {backgroundColor: "#3d3d3d", color: "#F5F5F5"};

  function handleThemeSwitch(){
    if(currentTheme === "type1"){
      setTheme("type2");
    }else{
      setTheme("type1");
    }
  }

  function handleHistoryVisibility(){
    if(historyVisible === "false"){
      document.getElementById("historyBar").style.display = "flex";
      setHistoryVisible("true");
    }else{
      document.getElementById("historyBar").style.display = "none";
      setHistoryVisible("false");
    }
  }

  return (
      <div class="window" style={currentTheme === "type2" ? backgroundStyle2 : backgroundStyle1}>
        <HistoryContext>
          <div id="historyBar">
            <HistoryList type={currentTheme}/>
          </div>
          <div id="main">
            <div id="navBar">
              <Button onClick={()=>handleThemeSwitch()}>Light/Dark</Button>
              <Button onClick={() => handleHistoryVisibility()}>History</Button>
            </div>
            <div id="calcContainer" style={currentTheme === "type2" ? calcStyle2 : calcStyle1}>
              <div id="whiteSpace" style={currentTheme === "type2" ? fieldColor2 : fieldColor1}></div>
              <input id='calcTextField' style={currentTheme === "type2" ? fieldColor2 : fieldColor1}></input>
              <div id="buttonsTable">
                  <OperationButton class="button" value="AC" type={currentTheme}></OperationButton>
                  <NumberButton class="button" value="(" type={currentTheme}/>
                  <NumberButton class="button" value=")" type={currentTheme}></NumberButton>
                  <OperationButton class="button" value="/" type={currentTheme}></OperationButton>
                  <NumberButton class="button" value="7" type={currentTheme}></NumberButton>
                  <NumberButton class="button" value="8" type={currentTheme}></NumberButton>
                  <NumberButton class="button" value="9" type={currentTheme}></NumberButton>
                  <OperationButton class="button" value="*" type={currentTheme}></OperationButton>
                  <NumberButton class="button" value="4" type={currentTheme}></NumberButton>
                  <NumberButton class="button" value="5" type={currentTheme}></NumberButton>
                  <NumberButton class="button" value="6" type={currentTheme}></NumberButton>
                  <OperationButton class="button" value="-" type={currentTheme}></OperationButton>
                  <NumberButton class="button" value="1" type={currentTheme}></NumberButton>
                  <NumberButton class="button" value="2" type={currentTheme}></NumberButton>
                  <NumberButton class="button" value="3" type={currentTheme}></NumberButton>
                  <OperationButton class="button" value="+" type={currentTheme}></OperationButton>
                  <OperationButton class="button" value="DEL" type="type3"></OperationButton>
                  <NumberButton class="button" value="0" type={currentTheme}></NumberButton>
                  <NumberButton class="button" value="." type={currentTheme}></NumberButton>
                  <OperationButton class="button" value="=" type={currentTheme}></OperationButton>
              </div>
            </div>
          </div>
        </HistoryContext>
      </div>
  );
}
export default App;
