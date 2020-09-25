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

const CityCoordinate = {
    "Melbourne" : ["-37.8136", "144.963"],
    "Sydney" : ["-33.859972", "151.211111"],
    "Brisbane" : ["-27.4678", "153.028"],
    "Perth" : ["-31.952222", "115.858889"],
};

const today = new Date().getDay;

const cityList = ["Melbourne", "Sydney", "Brisbane", "Perth"]

class MainContainer extends React.Component {
    
    constructor(props){

        super(props);
        this.state = {
            CurrentCity : "Melbourne",
            CurrentCityList : cityList.filter(city => city!="Melbourne"),
            CurrentCityWeather : {
                current : {
                    temp: "NaN",
                    weather : [{main : "Rain"}],
                    humidity : "81",
                    wind_speed : "6.2",

                },
                daily : [
                    {
                        temp: {day : "NaN"},
                        weather : [{main : "Rain"}],
                    },
                    {
                        temp: {day : "NaN"},
                        weather : [{main : "Rain"}],
                    },
                    {
                        temp: {day : "NaN"},
                        weather : [{main : "Rain"}],
                    },
                    {
                        temp: {day : "NaN"},
                        weather : [{main : "Rain"}],
                    },
                    {
                        temp: {day : "NaN"},
                        weather : [{main : "Rain"}],
                    },
                    {
                        temp: {day : "NaN"},
                        weather : [{main : "Rain"}],
                    }
                ]
            },
            OtherCityWeather_0 : {
                current : {
                temp: "NaN",
                weather : [{main : "Rain"}],
                },
            },
            OtherCityWeather_1 : {
                current : {
                temp: "NaN",
                weather : [{main : "Rain"}],
                },
            },
            OtherCityWeather_2 : {
                current : {
                temp: "NaN",
                weather : [{main : "Rain"}],
                },
            },
            

            
        };
        this.OnCityListClick = this.OnCityListClick.bind(this);
    }

    componentDidMount() {
        const that = this;
        async function getdata_CurrentCity(CityName) {
            await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + CityCoordinate[CityName][0] + "&lon=" + CityCoordinate[CityName][1] + "&units=metric&exclude=minutely,hourly&appid=29560aaafc26837d698516f31757b3bb", 
            {
	            "method": "GET",
            })
            .then(function(resp) { return resp.json() })
            .then((data)=>{
                console.log(data);
                that.setState(
                    {
                        CurrentCityWeather : data,
                    })

            })
            .catch(err => {console.log(err);});
        }
        getdata_CurrentCity(this.state.CurrentCity);
        async function getdata_OtherCity(CityName, ith_city) {
            let StateSet = `OtherCityWeather_${ith_city}`;
            await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + CityCoordinate[CityName][0] + "&lon=" + CityCoordinate[CityName][1] + "&units=metric&exclude=minutely,hourly&appid=29560aaafc26837d698516f31757b3bb", 
            {
	            "method": "GET",
            })
            .then(function(resp) { return resp.json() })
            .then((data)=>{
                console.log(data);
                that.setState(
                    {
                        [StateSet] : data,
                    })

            })
            .catch(err => {console.log(err);});
        }
        for (let i = 0; i < 3 ; i++){
            getdata_OtherCity(this.state.CurrentCityList[i], i);
        }
    }

    OnCityListClick(ClickedCity) {
        const that = this;
        const citylistOnClick = cityList.filter(city => city!=ClickedCity);
        
        console.log(ClickedCity);
        this.setState({
            CurrentCity : ClickedCity,
            CurrentCityList : citylistOnClick,
        });

        async function getdata_CurrentCity(CityName) {
            await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + CityCoordinate[CityName][0] + "&lon=" + CityCoordinate[CityName][1] + "&units=metric&exclude=minutely,hourly&appid=29560aaafc26837d698516f31757b3bb", 
            {
	            "method": "GET",
            })
            .then(function(resp) { return resp.json() })
            .then((data)=>{
                console.log(data);
                that.setState(
                    {
                        CurrentCityWeather : data,
                    })

            })
            .catch(err => {console.log(err);});
        }
        getdata_CurrentCity(ClickedCity);
        async function getdata_OtherCity(CityName, ith_city) {
            let StateSet = `OtherCityWeather_${ith_city}`;
            await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + CityCoordinate[CityName][0] + "&lon=" + CityCoordinate[CityName][1] + "&units=metric&exclude=minutely,hourly&appid=29560aaafc26837d698516f31757b3bb", 
            {
	            "method": "GET",
            })
            .then(function(resp) { return resp.json() })
            .then((data)=>{
                console.log(data);
                that.setState(
                    {
                        [StateSet] : data,
                    })

            })
            .catch(err => {console.log(err);});
        }
        for (let i = 0; i < 3 ; i++){
            getdata_OtherCity(citylistOnClick[i], i);
        }
    }

    render() {
        const otherCityWeatherList = [this.state.OtherCityWeather_0, this.state.OtherCityWeather_1, this.state.OtherCityWeather_2];
        return (
            <React.Fragment>
                <div className={DayPart[this.props.currentTime]}>
                    <CurrentCity currentCityWeather={this.state.CurrentCityWeather} currentTime={this.props.currentTime} CityDisplay={this.state.CurrentCity}/>
                    <div className="Second_Container"> 
                        <CityList otherCityWeatherList={otherCityWeatherList} currentCityList={this.state.CurrentCityList} CurrentCity={this.state.CurrentCity} onCityListButtonClick={ClickedCity => this.OnCityListClick(ClickedCity)}/>
                        <Forecast currentCityWeather={this.state.CurrentCityWeather} CurrentCity={this.state.CurrentCity}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainContainer;