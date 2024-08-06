import './HistoryItem.css';

const eqStyle1 = {color: "#000000"};
const eqStyle2 = {color: "#FFFFFF"};

const spaceStyle1 = {backgroundColor: "#000000"};
const spaceStyle2 = {backgroundColor: "#FFFFFF"};

export function HistoryItem(props, key){
    return(
            <div key={key}>
                <p className="eq" style={props.type === "type1" ? eqStyle1 : eqStyle2}>{props.equation}</p>
                <p className="sol" style={props.type === "type1" ? eqStyle1 : eqStyle2}>{props.solution}</p>
                <div className="space" style={props.type === "type1" ? spaceStyle1 : spaceStyle2}></div>
            </div>
    );
}