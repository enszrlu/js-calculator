

export default function Display(props) {
    return (
        <div id='displayDiv'>
            <h2 id='memoryDisplay'>{props.memoryText}</h2>
            <h1 id={props.id}>{props.inputText}</h1>
        </div>
    );
}