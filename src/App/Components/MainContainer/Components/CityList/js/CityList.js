import React from 'react';
import '../scss/CityList.scss'
import CityListButton from '../Components/CItyListButton/js/CityListButton'




function CityList(props) {

        console.log(props.otherCityWeatherList);
        return(
            
            <div className="CityList_Container">
                <div className="OtherCities">
                    Other Cities
                </div>
                <CityListButton onButtonClick={props.onCityListButtonClick} currentCityList={props.currentCityList[0]} otherCityWeather={props.otherCityWeatherList[0]}/>
                <CityListButton onButtonClick={props.onCityListButtonClick} currentCityList={props.currentCityList[1]} otherCityWeather={props.otherCityWeatherList[1]}/>
                <CityListButton onButtonClick={props.onCityListButtonClick} currentCityList={props.currentCityList[2]} otherCityWeather={props.otherCityWeatherList[2]}/>
            </div>
        )

}

export default CityList;