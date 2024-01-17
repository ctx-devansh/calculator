import './HistoryItem.css';

const eqStyle1 = {color: "#000000"};
const eqStyle2 = {color: "#FFFFFF"};

const spaceStyle1 = {backgroundColor: "#000000"};
const spaceStyle2 = {backgroundColor: "#FFFFFF"};

export function HistoryItem(props){
    return(
            <div>
                <p class="eq" style={props.type === "type1" ? eqStyle1 : eqStyle2}>{props.equation}</p>
                <p class="sol" style={props.type === "type1" ? eqStyle1 : eqStyle2}>{props.solution}</p>
                <div class="space" style={props.type === "type1" ? spaceStyle1 : spaceStyle2}></div>
            </div>
    );
}