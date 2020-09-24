import React from 'react';
import '../scss/Forecast.scss'

const DayPart = {
    "Morning" : "CityDisplay_morning",
    "Afternoon" : "CityDisplay_afternoon",
    "Night" : "CityDisplay_night",
}

const cityList = ["Melbourne", "Sydney", "Brisbane", "Perth"]

class Forecast extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentCityList : cityList.filter(city => city!=this.props.CurrentCity),
        };
    }

    render() {
        return(
            <div></div>
        )

    };


}

export default Forecast;