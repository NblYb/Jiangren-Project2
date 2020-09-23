import React from 'react';
import Background from '../../Background/js/Background'
import MainContainer from '../../MainContainer/js/MainContainer'

const currentHour = new Date();

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Background currentHour = {currentHour.getHours()}/>
                <MainContainer/>
            </React.Fragment>
            
        );
    };
};

export default App;