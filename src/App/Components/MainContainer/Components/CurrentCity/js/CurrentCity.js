import React from 'react';
import '../scss/CurrentCity.scss'

const DayPart = {
    "Morning" : "CityDisplay_morning",
    "Afternoon" : "CityDisplay_afternoon",
    "Night" : "CityDisplay_night",
}

class CurrentCity extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            Weather: "Sunny",
            Temperature: "25.25",
            Humidity: "50%",
            Wind: "3.5",
        };
    };




    
    render() {
        return (
            <div className={DayPart[this.props.currentTime]}>
                <div className="Current_City_Display">
                    <div className="Temperature">{this.state.Temperature + '\u00b0'}</div>
                    <div className="Weather">{this.state.Weather}<span>ab</span></div>
                    <div className="Humidity">
                        <div>
                            Humidity 
                        </div>
                        <div>
                            {this.state.Humidity}
                        </div>
                    </div>
                    <div className="Wind">
                        <div>
                            Wind
                        </div>
                        <div>
                            {this.state.Wind + " K/M"}
                        </div>
                    </div>
                </div>
                <div className="Current_City_Name_container">
                    <div className="Current_City_Name">{this.props.CityDisplay}</div>
                    <div className="Current_City_Name_Underscore" />
                    <div className="Current_City_Weather_icon" />
                </div>
            </div>
        )
    };
}

export default CurrentCity;