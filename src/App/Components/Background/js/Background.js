import React from 'react';
import '../scss/Background.scss'

const DayPart = {
    "Morning" : "background_morning",
    "Afternoon" : "background_afternoon",
    "Night" : "background_night",
}

class Background extends React.Component {

    render() {
        console.log(this.props.currentTime);
        return(
            
            <div className={DayPart[this.props.currentTime]}></div>
        );
        
    }
}

export default Background;