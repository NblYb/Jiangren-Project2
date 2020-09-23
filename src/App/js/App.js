import React from 'react';
import Background from '../../Background/js/Background'

const currentHour = new Date();

const App = () => {
    return (
        <Background currentHour = {currentHour.getHours()} />
    );
};

export default App;