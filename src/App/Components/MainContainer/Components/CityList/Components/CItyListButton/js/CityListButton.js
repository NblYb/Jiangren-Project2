import React from 'react';
import '../scss/CityListButton.scss'

function CityListButton(props) {
    
    return (
        <button onClick={() => props.onButtonClick(props.currentCityList)}>
            <div className="CityList_CityName">
                {props.currentCityList}
            </div>
            <div className="CityList_Temperature">
                {"25" + '\u00b0'}
            </div>
            <div className="CityList_WeatherIcon SunnyIcon">
                        
            </div>
        </button>
    )
};

export default CityListButton;