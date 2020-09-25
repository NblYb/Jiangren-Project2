import React from 'react';
import Background from '../Components/Background/js/Background'
import MainContainer from '../Components/MainContainer/js/MainContainer'

const currentHour = new Date().getHours;

class App extends React.Component {
    constructor(props) {
        super(props);
        if (currentHour <= 12 && currentHour >=6) {
            this.state= {currentTime: "Morning"} ;
        }
        else if (currentHour > 12 && currentHour <= 18) {
            this.state = {currentTime : "Afternoon"};
        }
        else {
            this.state = {currentTime : "Night"};
        }

    }
    render() {
        return (
            <React.Fragment>
                <Background currentTime = {this.state.currentTime}/>
                <MainContainer currentTime = {this.state.currentTime}/>
            </React.Fragment>
            
        );
    };
};

export default App;