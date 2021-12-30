import React, { useContext } from 'react';
import { NumberContext } from './numberProvider';

const EqualButton = () => {
    const { calculateResult } = useContext(NumberContext);
    return (
        <button className="white-button" type="button" onClick={() => calculateResult()}>
            =
        </button>
    );
};

export default EqualButton;