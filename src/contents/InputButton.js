

export default function InputButton(props) {
    return (
        <button id={props.id} onClick={props.handleInputClick} value={props.value} className={props.class}>{props.value}</button>
    );
}