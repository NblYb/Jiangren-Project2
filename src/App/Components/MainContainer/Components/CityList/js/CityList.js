import React from 'react';
import '../scss/CityList.scss'


const cityList = ["Melbourne", "Sydney", "Brisbane", "Perth"]

class CityList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentCityList : cityList.filter(city => city!=this.props.CurrentCity),
        };
    }

    render() {

        return(
            
            <div className="CityList_Container">
                <div className="OtherCities">
                    Other Cities
                </div>
                <button onClick={() => this.props.onCityListButtonClick(this.state.currentCityList[0])}>
                    <div className="CityList_CityName">
                        {this.state.currentCityList[0]}
                    </div>
                    <div className="CityList_Temperature">
                        {"25" + '\u00b0'}
                    </div>
                    <div className="CityList_WeatherIcon SunnyIcon">
                        
                    </div>
                </button>
                <button onClick={() => this.props.onCityListButtonClick(this.state.currentCityList[1])}>
                    <div className="CityList_CityName">
                        {this.state.currentCityList[1]}
                    </div>
                    <div className="CityList_Temperature">
                        {"25" + '\u00b0'}
                    </div>
                    <div className="CityList_WeatherIcon SunnyIcon">
                        
                    </div>
                </button>
                <button onClick={() => this.props.onCityListButtonClick(this.state.currentCityList[2])}>
                    <div className="CityList_CityName">
                        {this.state.currentCityList[2]}
                    </div>
                    <div className="CityList_Temperature">
                        {"25" + '\u00b0'}
                    </div>
                    <div className="CityList_WeatherIcon SunnyIcon">
                        
                    </div>
                </button>
            </div>
        )

    };


}

export default CityList;