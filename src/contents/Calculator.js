import Display from './Display.js'
import InputButton from './InputButton.js'
import Operator from './Operator.js'


export default function Calculator(props) {
    let inputButtons = [{name: 'seven', value: '7'}, {name:'eight', value: '8'}, {name:'nine', value: '9'}, {name:'four', value: '4'}, 
    {name:'five', value: '5'}, {name:'six', value: '6'}, {name:'one', value: '1'}, {name:'two', value: '2'}, {name:'three', value: '3'}, 
    {name:'zero', value: '0'}, {name:'decimal', value: '.'}];

    let operatorButtons = [{name: 'add', value: '+'}, {name: 'subtract', value: '-'}, {name: 'multiply', value: '*'}, {name: 'divide', value: '/'},
    {name: 'clear', value: 'AC'}, {name: 'equals', value: '='}]

    return (
        <div id='calculator'>
            <Display inputText={props.input} memoryText={props.memory} id='display' />
            {inputButtons.map((button) => <InputButton id={button.name} value={button.value} key={button.value} handleInputClick={props.handleInputClick} class='inputButton'/>)}
            {operatorButtons.map((button) => <Operator id={button.name} value={button.value} key={button.value} handleOperatorClick={props.handleOperatorClick} class='operator'/>)}
        </div>
    );
}