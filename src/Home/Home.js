import React from "react";
import "./Home.css";

const Home = () =>{
    return (
        <div className = "col-md-7" id="homePage">
            <div id="wrapper">
            <img id="robotImg" src="../assets/GiantRobotLTD_Logo.svg" alt="robot logo"/>   
            <div>
                <h1 id="homeH1">Welcome</h1>
                <p id="homeP">Please tell us a bit about yourself to get started.</p>
            </div>
            </div>
        </div>
    );
}

export default Home;