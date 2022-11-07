import {
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Toolbar,
} from "@mui/material";
import { Box, positions, width } from "@mui/system";
import React from "react";
import style from "./style.css";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import NearMeIcon from "@mui/icons-material/NearMe";
import Warm from "../../../assets/imgs/weatherApp/warm.jpg";
import { useStyles } from "./styles";

const api = {
  key: "0cd94553bd9cfdf688887ff4b10e097f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const classes = useStyles();
  return (
    <Box>
      <Toolbar />
      <Box sx={{ textAlign: "center" }}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            margin: "auto",
            maxWidth: "50%",
            width: "500px",
          }}
        >
          <InputBase
            sx={{ ml: 3, flex: 1, color: "#808080" }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            sx={{ p: "10px", color: "#007AF7" }}
            aria-label="directions"
          >
            <NearMeIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box
        className="sizeBox"
        sx={{
          margin: "auto",
          border: "1px solid red",
          mt: 2,
          borderRadius: "5px",
          boxShadow: 2,
          backgroundSize: "contain",
        }}
      ></Box>
    </Box>
  );
}

export default Weather;
