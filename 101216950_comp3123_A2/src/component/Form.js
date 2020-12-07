import React from "react";
import "../css/form.css";

const Form = (props)=>{
  return(
    <div className="body my-5 mx-auto">
      <h2 className="text-muted text-center my-4">Weather App</h2>
      <form className="change-location my-4 text-center text-dark" onSubmit={props.loadweather}>
        <label htmlFor="city"> Enter a city name to view weather</label>
        <input type="text" name="city" className="form-control p-4" autoComplete="off" required/>
        <div className="form">
          <button className="btn btn-secondary">Get Weather</button>
        </div>
      </form>
    </div>
  )
}

export default Form