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

const cityList = ["Melbourne", "Sydney", "Brisbane", "Perth"]

class MainContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            CurrentCity : "Melbourne",
            currentCityList : cityList.filter(city => city!="Melbourne"),
        };
        this.OnCityListClick = this.OnCityListClick.bind(this);
    }

    OnCityListClick(ClickedCity) {
        console.log(ClickedCity);
        this.setState({
            CurrentCity : ClickedCity,
            currentCityList : cityList.filter(city => city!=ClickedCity),
        });
    }


    render() {

        return (
            <React.Fragment>
                <div className={DayPart[this.props.currentTime]}>
                    <CurrentCity currentTime={this.props.currentTime} CityDisplay={this.state.CurrentCity}/>
                    <div className="Second_Container"> 
                        <CityList currentCityList={this.state.currentCityList} CurrentCity={this.state.CurrentCity} onCityListButtonClick={ClickedCity => this.OnCityListClick(ClickedCity)}/>
                        <Forecast CurrentCity={this.state.CurrentCity} onCityListButtonClick={ClickedCity => this.OnCityListClick(ClickedCity)}/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default MainContainer;