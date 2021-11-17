import React from 'react';
import Calculator from './components/calculator';
import NumberProvider from './components/numberProvider';

const App = () => (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
);

export default App;