import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import Asteroid from './components/planetes';

function App() {
  const [asteroids, setAsteroid] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response  => {
            console.log(response);
            const { data } = response;
            setAsteroid({ asteroids: data });
            //console.log(object);
        })
        .catch(error => {
            console.log("No data received", error);
        })
  }, []);

  return (
    <div className="App">
      <Asteroid data={asteroids}/>
    </div>
  );
}

export default App;

