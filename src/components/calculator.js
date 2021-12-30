import React from 'react';
import NumberButton from './numberButton';
import FunctionButton from './functionButton';
import ClearButton from './clearButton';
import Display from './display';
import EqualButton from './equalButton';
import BackButton from './backButton';
import { CalculatorStyles } from '../styles/styles';

const Calculator = () => (
    <CalculatorStyles>
        <div className='display'>
            <h1>pumpkinlator</h1>
            <Display />
        </div>
        <div className='number-pad'>
            <ClearButton />
            <BackButton />
            <FunctionButton funcVal='^' />
            <FunctionButton funcVal='/' />
            <NumberButton buttonValue={7} />
            <NumberButton buttonValue={8} />
            <NumberButton buttonValue={9} />
            <FunctionButton funcVal='*' />
            <NumberButton buttonValue={4} />
            <NumberButton buttonValue={5} />
            <NumberButton buttonValue={6} />
            <FunctionButton funcVal='-' />
            <NumberButton buttonValue={1} />
            <NumberButton buttonValue={2} />
            <NumberButton buttonValue={3} />
            <FunctionButton funcVal='+' />
            <div className='zero'>
                <NumberButton buttonValue={0} />
            </div>
            <NumberButton buttonValue='.' />
            <EqualButton />
        </div>
    </CalculatorStyles>
);

export default Calculator;