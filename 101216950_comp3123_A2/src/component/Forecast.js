import React from "react";
import "../css/form.css";

const Forecast = props => {
  return (
    <div>
        <h2 className="mx-auto text-muted text-center my-4">{props.cityname}</h2>
        <div className="body mx-auto text-muted text-center my-3">Weather condition
        {props.icon && (<h5 className="text-dark text-center my-4">
            <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} />
          </h5>)}
          
          {props.temp_celsius ? (
            <h1 className="mx-auto text-dark text-center my-2">{props.temp_celsius}&deg;C</h1>
          ) : null}

          <h5 className="text-dark text-center my-5">{props.temp_min} {props.temp_max}</h5>

          <h4 className="text-dark text-center my-5">
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}
          </h4>
          <p className="text-dark text-center">{props.timezone}</p>
        </div>
    </div>
  );
};

export default Forecast;

