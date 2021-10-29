import React, { useContext } from 'react';
import { NumberContext } from './numberProvider';

// const Keyboard = () => {
//     const { handleSetDisplayValue } = useContext(NumberContext);
//
//     return (
//         <button type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
//             {buttonValue}
//         </button>
//     );
// };
/*
class KeyboardInput extends React.Component {
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const { doMath } = useContext(NumberContext);
            doMath();
        }
        if ((e.key === '+') || (e.key === '-') || (e.key === '/') || (e.key === '*') || (e.key === '^')) {
            const { handleSetCalcFunction } = useContext(NumberContext);
            handleSetCalcFunction(e.key);
        }
    }
}
//
const KeyboardHandler = KeyboardInput();

export default Keyboard;

 */