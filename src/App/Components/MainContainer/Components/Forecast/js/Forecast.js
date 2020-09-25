import React from 'react';
import ForecastEachDay from '../Components/ForecastEachDay/js/ForecastEachDay'
import '../scss/Forecast.scss'

const DayPart = {
    "Morning" : "CityDisplay_morning",
    "Afternoon" : "CityDisplay_afternoon",
    "Night" : "CityDisplay_night",
}

const Week = {
    1 : "Mon",
    2 : "Tue",
    3 : "Wed",
    4 : "Thu",
    5 : "Fri",
    6 : "Sat",
    7 : "Sun",
    8 : "Mon",
    9 : "Tue",
    10 : "Wed",
    11 : "Thu",
    12 : "Fri",
    13 : "Sat",
    14 : "Sun",
};

const today = new Date().getDay();

const cityList = ["Melbourne", "Sydney", "Brisbane", "Perth"];

class Forecast extends React.Component {

    render() {
        return(
            
            <div className="Forecast_Container">
                <div className="Forecast_Title">
                    Forecast
                </div>
                <ForecastEachDay Day={Week[today + 1]} ForecastWeather={this.props.currentCityWeather.daily[0]}/>
                <ForecastEachDay Day={Week[today + 2]} ForecastWeather={this.props.currentCityWeather.daily[1]}/>
                <ForecastEachDay Day={Week[today + 3]} ForecastWeather={this.props.currentCityWeather.daily[2]}/>
                <ForecastEachDay Day={Week[today + 4]} ForecastWeather={this.props.currentCityWeather.daily[3]}/>
                <ForecastEachDay Day={Week[today + 5]} ForecastWeather={this.props.currentCityWeather.daily[4]}/>
                <ForecastEachDay Day={Week[today + 6]} ForecastWeather={this.props.currentCityWeather.daily[5]}/>
            </div>
        )

    };


}

export default Forecast;
