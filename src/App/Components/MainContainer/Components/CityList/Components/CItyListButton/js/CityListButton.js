import React from 'react';
import '../scss/CityListButton.scss'

function CityListButton(props) {
    let icon = props.otherCityWeather.current.weather[0].main;
    return (
        <button onClick={() => props.onButtonClick(props.currentCityList)}>
            <div className="CityList_CityName">
                {props.currentCityList}
            </div>
            <div className="CityList_Temperature">
                {props.otherCityWeather.current.temp + '\u00b0'}
            </div>
            <div className={"CityList_WeatherIcon " + icon}>
                        
            </div>
        </button>
    )
};

export default CityListButton;