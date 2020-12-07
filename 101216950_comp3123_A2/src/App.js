import React from "react";
import axios from 'axios';
import Form from "./component/Form";
import Forecast from "./component/Forecast";
import "./css/form.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Api_Key = "778fb2768775d2eacc49dcbc6cc0a4d1";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      icon: "",
      main: "",
      temp_celsius: "",
      temp_max: "",
      temp_min: "",
      description: "",
      timezone:"",
    };
  }

  getDate(seconds){
    let dateTime = new Date()
    let localTime = new Date().getTime()
    let localOffset = dateTime.getTimezoneOffset() * 60000
    let utc = localTime + localOffset
    let city = utc + (1000 * seconds)
    let newDateTime = new Date(city).toString().slice(4,24)
    return newDateTime;
  }
  
  getWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if (city) {
      axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
      ).then(res=>{
        const response = res.data
        this.setState({
          city: response.name,
          main: response.weather[0].main,
          temp_celsius: Math.floor(response.main.temp - 273.15),
          temp_max: Math.floor(response.main.temp_max - 273.15),
          temp_min: Math.floor(response.main.temp_min - 273.15),
          description: response.weather[0].description,
          icon: response.weather[0].icon,
          timezone: this.getDate(response.timezone),
        })
  
        // console.log(response);
      })
    }
  }
  render() {
    return (
      <div className = "mainbackground">
        <Form loadweather={this.getWeather} />
        
        <Forecast
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.temp_celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          icon = {this.state.icon}
          timezone = {this.state.timezone}
        />
      </div>
    );
  }
}

export default App;

