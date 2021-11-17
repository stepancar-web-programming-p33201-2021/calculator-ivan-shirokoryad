import React, { useContext } from 'react';
import { NumberContext } from './numberProvider';
import { DisplayStyles } from '../styles/styles';

const Display = () => {
    const { number, storedNumber, functionType } = useContext(NumberContext);
    return (
        <DisplayStyles>
            <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
            <p>{!storedNumber ? '?' : `${storedNumber} ${functionType} ${number}`}</p>
        </DisplayStyles>
    );
};

export default Display;