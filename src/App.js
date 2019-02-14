import React, { Component } from 'react';
import Form from "./Form/Form";
import Home from "./Home/Home";
import './bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="container-fluid containerHeight">
            <div className="row containerHeight">
                <Home/>
                <Form/>
            </div>
        </div> 
    );
  }
}

export default App;
