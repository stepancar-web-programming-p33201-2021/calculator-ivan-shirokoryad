import React, { useContext } from 'react';
import { NumberContext } from './numberProvider';

const FunctionButton = ({ funcVal }) => {
    const { handleSetCalcFunction } = useContext(NumberContext);
    return (
        <button className="function-button" type="button" onClick={() => handleSetCalcFunction(funcVal)}>
            {funcVal}
        </button>
    );
};

export default FunctionButton;