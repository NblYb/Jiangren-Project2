import React from 'react';
import CurrentCity from '../Components/CurrentCity/js/CurrentCity'
import CityList from '../Components/CityList/js/CityList'
import Forecast from '../Components/Forecast/js/Forecast'
import '../scss/MainContainer.scss'

const DayPart = {
    "Morning" : "MainContainer_morning",
    "Afternoon" : "MainContainer_afternoon",
    "Night" : "MainContainer_night",
}

class MainContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            CurrentCity : "Melbourne",
        };
        this.OnCityListClick = this.OnCityListClick.bind(this);
    }

    OnCityListClick(ClickedCity) {
        console.log(ClickedCity);
    }


    render() {

        return (
            <React.Fragment>
                <div className={DayPart[this.props.currentTime]}>
                    <CurrentCity currentTime={this.props.currentTime} CityDisplay={this.state.CurrentCity}/>
                    <div className="Second_Container"> 
                        <CityList CurrentCity={this.state.CurrentCity} onCityListButtonClick={ClickedCity => this.OnCityListClick(ClickedCity)}/>
                        <Forecast CurrentCity={this.state.CurrentCity} onCityListButtonClick={ClickedCity => this.OnCityListClick(ClickedCity)}/>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default MainContainer;