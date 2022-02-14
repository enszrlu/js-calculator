

export default function Operator(props) {
    return (
        <button id={props.id} value={props.value} onClick={props.handleOperatorClick} className={props.class}> {props.value} </button>
    );
}