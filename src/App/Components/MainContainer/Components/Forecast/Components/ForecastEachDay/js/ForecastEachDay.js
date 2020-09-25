import React from 'react';
import '../scss/ForecastEachDay.scss'




function ForecastEachDay(props) {
    
    return (
        <div className="ForecastEachDayContainer">
            <div className="day">{props.Day}</div>
            <div className={"ForecastEachDayWeatherIcon " + props.ForecastWeather.weather[0].main +"Icon"}></div>
            <div className="ForecastEachDayTemperature">{props.ForecastWeather.temp.day + '\u00b0'}</div>
        </div>
    )
};

export default ForecastEachDay;