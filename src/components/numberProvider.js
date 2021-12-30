import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
    const [number, setNumber] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [functionType, setFunctionType] = useState('');

    const handleSetDisplayValue = (num) => {
        if ((!number.includes('.') || num !== '.') && number.length < 8) {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    };

    const handleSetStoredValue = () => {
        setFirstNumber(number);
        setNumber('');
    };

    const handleClearValue = () => {
        setNumber('');
        setFirstNumber('');
        setFunctionType('');
    };

    const handleBackButton = () => {
        if (number !== '') {
            const deletedNumber = number.slice(0, number.length - 1);
            setNumber(deletedNumber);
        }
    };

    const handleSetCalcFunction = (type) => {
        if (number) {
            setFunctionType(type);
            handleSetStoredValue();
        }
        if (firstNumber) {
            setFunctionType(type);
        }
    };

    const calculateResult = () => {
        if (number && firstNumber) {
            switch (functionType) {
                case '+':
                    setFirstNumber(
                        `${Math.round(`${(parseFloat(firstNumber) + parseFloat(number)) * 100}`) / 100}`
                    );
                    break;
                case '-':
                    setFirstNumber(
                        `${Math.round(`${(parseFloat(firstNumber) - parseFloat(number)) * 1000}`) / 1000}`
                    );
                    break;
                case '/':
                    setFirstNumber(
                        `${Math.round(`${(parseFloat(firstNumber) / parseFloat(number)) * 1000}`) / 1000}`
                    );
                    break;
                case '*':
                    setFirstNumber(
                        `${Math.round(`${parseFloat(firstNumber) * parseFloat(number) * 1000}`) / 1000}`
                    );
                    break;
                case '^':
                    setFirstNumber(
                        `${Math.round(`${Math.pow(parseFloat(firstNumber),parseFloat(number))}`)}`
                    );
                    break;
                default:
                    break;
            }
            setNumber('');
        }
    };

    return (
        <NumberContext.Provider
            value={{
                calculateResult: calculateResult,
                functionType,
                handleBackButton,
                handleClearValue,
                handleSetCalcFunction,
                handleSetDisplayValue,
                handleSetStoredValue,
                number,
                storedNumber: firstNumber,
                setNumber,
            }}>
            {props.children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;