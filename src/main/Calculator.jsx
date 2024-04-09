import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {
    constructor(props) {
        super(props); // Adiciona chamada ao super
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        console.log('clear'); 
    }

    setOperation(operation) {
        console.log(operation); 
    }

    addDigit(n) {
        console.log(n); 
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={100}/> 
                <Button label="AC" click={() => this.clearMemory()}/>
                <Button label="/" click={() => this.setOperation('/')}/>
                <Button label="7" click={() => this.addDigit('7')}/>
                <Button label="8" click={() => this.addDigit('8')}/>
                <Button label="9" click={() => this.addDigit('9')}/>
                <Button label="*" click={() => this.setOperation('*')}/>
                <Button label="4" click={() => this.addDigit('4')}/>
                <Button label="5" click={() => this.addDigit('5')}/>
                <Button label="6" click={() => this.addDigit('6')}/>
                <Button label="-" click={() => this.setOperation('-')}/>
                <Button label="1" click={() => this.addDigit('1')}/>
                <Button label="2" click={() => this.addDigit('2')}/>
                <Button label="3" click={() => this.addDigit('3')}/>
                <Button label="+" click={() => this.setOperation('+')}/>
                <Button label="0" click={() => this.addDigit('0')}/>
                <Button label="." click={() => this.addDigit('.')}/>
                <Button label="=" click={() => this.setOperation('=')}/>
            </div>
        );
    }
}
