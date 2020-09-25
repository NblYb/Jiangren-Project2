import React from 'react';
import '../scss/CurrentCity.scss'

const DayPart = {
    "Morning" : "CityDisplay_morning",
    "Afternoon" : "CityDisplay_afternoon",
    "Night" : "CityDisplay_night",
}

// function fahrenheit_to_celsius(fahrenheit) {
//     return String((parseFloat(fahrenheit) - 32)/1.8);
// }

class CurrentCity extends React.Component {

    


    render() {
        return (
            <div className={DayPart[this.props.currentTime]}>
                <div className="Current_City_Display">
                    <div className="Temperature">{this.props.currentCityWeather.current.temp + '\u00b0'}</div>
                    <div className="Weather">{this.props.currentCityWeather.current.weather[0].main}<span>ab</span></div>
                    <div className="Humidity">
                        <div>
                            Humidity 
                        </div>
                        <div>
                            {this.props.currentCityWeather.current.humidity}
                        </div>
                    </div>
                    <div className="Wind">
                        <div>
                            Wind
                        </div>
                        <div>
                            {this.props.currentCityWeather.current.wind_speed + " K/M"}
                        </div>
                    </div>
                </div>
                <div className="Current_City_Name_container">
                    <div className="Current_City_Name">{this.props.CityDisplay}</div>
                    <div className="Current_City_Name_Underscore" />
                    <div className={"Current_City_Weather_icon " + this.props.currentCityWeather.current.weather[0].main}/>
                </div>
            </div>
        )
    };
}

export default CurrentCity;