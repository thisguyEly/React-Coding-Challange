import React, { useState, useReducer } from 'react';
import logo from './logo.jpeg';
import data, { VEHICLE_LIST } from './data';
import VehicleList from '../VehicleList/vehiclelist';

// Material-UI
//import RaisedButton from 'material-ui/RaisedButton'
//import TextField from 'material-ui/TextField'

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      name: '',
      email: '',
      phone: '',
    }
  }
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}


function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 5000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="logo" />
      <h1>Welcome To GoodHood</h1>
      <h2>To Submit a Service Request Please Fill Out the Following Fields</h2>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
            <p>Email Address</p>
            <input name="email" onChange={handleChange}></input>
            <p>Phone Number</p>
            <input name="phone" onChange={handleChange}></input>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Service</p>
            <select name="service" onChange={handleChange} value={formData.name || ''}>
              <option value="">--Please choose an option--</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Front Brake Pads & Rotors">Front Brake Pads & Rotors</option>
              <option value="honey-Pre-Purchase Inspection">Pre-Purchase Inspection</option>
              <option value="Front Brake Pads & Rotors">Front Brake Pads & Rotors</option>
              <option value="Replace Alternator">Replace Alternator</option>
              <option value="Replace Starter">Replace Starter</option>
              <option value="Replace Battery">Replace Battery</option>
              <option value="Rear Brake Pads & Rotors">Rear Brake Pads & Rotors</option>
              <option value="Diagnostic">Diagnostic</option>
            </select>
          </label>
          <label>
            <p>Vehicle List</p>
            <select name="vehicle" onChange={handleChange} value={formData.name || ''}>
              <option value="">--Please choose an option--</option>
              <option>    <div className="wrapper">
                <h1>Vehicle</h1>
                {VEHICLE_LIST.map(vehicle => (
                  <VehicleList key={vehicle.name} 
                  name = {vehicle.name}/>
                ))}
              </div></option>
            </select>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default App;