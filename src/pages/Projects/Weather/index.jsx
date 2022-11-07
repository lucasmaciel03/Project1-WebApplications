import { Grid, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import thunderstorm from '../../../assets/imgs/weatherApp/images/Thunderstorm.png';
import drizzle from '../../../assets/imgs/weatherApp/images/Drizzle.png';
import rain from '../../../assets/imgs/weatherApp/images/Rain.png';
import snow from '../../../assets/imgs/weatherApp/images/Snow.png';
import atmosphere from '../../../assets/imgs/weatherApp/images/Atmosphere.png';
import clear from '../../../assets/imgs/weatherApp/images/Clear.png';
import clouds from '../../../assets/imgs/weatherApp/images/Cloudy.png';
import extreme from '../../../assets/imgs/weatherApp/images/Extreme.png';
import defaultIcon from '../../../assets/imgs/weatherApp/images/Partly-cloudy.png';


const api = {
  key: "0cd94553bd9cfdf688887ff4b10e097f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  
  const weatherIcon = {
    thunderstorm,
    drizzle,
    rain,
    snow,
    atmosphere,
    clear,
    clouds,
    extreme,
    defaultIcon,
  }

  return (
    
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <Toolbar />
      <Box sx={{ textAlign: "center" }}>
        <TextField
          sx={{ color: "#007AF7", width: "300px" }}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
      </Box>
      {(typeof weather.main != "undefined") ? (
      <Grid sx={{border:'1px solid #B9BCBC', borderRadius:'20px',maxWidth:'50%', width:'500px', margin:'auto', mt:5, boxShadow:1, textAlign:'center'}}>
        <Typography sx={{fontSize:'20px', fontFamily:'Poppins'}}>
        {weather.name}
        </Typography>
        <Typography sx={{fontSize:'20px', fontFamily:'Poppins'}}>
        {weather.sys.country}
        </Typography>
        <Typography sx={{fontSize:'20px', fontFamily:'Poppins'}}>
        {Math.round(weather.main.temp)} ºC
        </Typography>
        <Typography sx={{fontSize:'20px', fontFamily:'Poppins'}}>
        {weather.description}
        </Typography>
        <img src={`${weatherIcon.defaultIcon}`} alt="WeatherIcon" height="64" width="64" />
      </Grid>
      ) : ('')}
    </div>
  );
}

export default Weather;
