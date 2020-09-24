import React from 'react';
import '../scss/CityList.scss'
import CityListButton from '../Components/CItyListButton/js/CityListButton'




class CityList extends React.Component {

    render() {

        return(
            
            <div className="CityList_Container">
                <div className="OtherCities">
                    Other Cities
                </div>
                <CityListButton onButtonClick={this.props.onCityListButtonClick} currentCityList={this.props.currentCityList[0]}/>
                <CityListButton onButtonClick={this.props.onCityListButtonClick} currentCityList={this.props.currentCityList[1]}/>
                <CityListButton onButtonClick={this.props.onCityListButtonClick} currentCityList={this.props.currentCityList[2]}/>
            </div>
        )

    };


}

export default CityList;