import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";
import MyPhoto from "../../assets/imgs/myPhoto.jpg";
import { useStyles } from "./styles";
import Style from "./style.css";
import Projects from "../Projects";

function Aboutme() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ height: "auto"}}>
      <section id="about">
        <Box component="main" className={classes.tilteBox1}>

          <Toolbar/>
          <Box className={classes.titleBox}>
            <Typography className={classes.title}>
              a bit about <span className={classes.titleBlue}>me.</span>
            </Typography>
          </Box>
     
          <Box className={classes.nameBox}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "italic",
                fontWeight: "700",
                display: "inline",
                color: "#007AF7",
                fontSize: "27px",
                userSelect: "none",
              }}
            >
              LUCAS MACIEL
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "bold",
                fontWeight: "700",
                display: "inline-block",
                color: "#808080",
                fontSize: "27px",
                userSelect: "none",
                padding: "0 0.5rem",
              }}
            >
              , level 19
            </Typography>
          </Box>
          <Box classsName={classes.textinfoBox}>
            <Typography
              className={classes.textInfo}
            >
              Web Dev student based in Póvoa de Varzim, Porto. I love to think
              outside the box and find creative solutions for all my projects.
              <div>
                I also really like learn about other program languages,
                especially back-end.
              </div>
              I wish to learn more about development Mobile and Web so I can
              become even better.
            </Typography>
          </Box>
          <Box className={classes.infosBox}>
            <Typography className={classes.infos}>
              SCHOOL{" "}
              <span className={classes.infosGrey}>
                : Escola Superior de Tecnologia e Gestão
              </span>
            </Typography>
          </Box>
          <Box className={classes.infosBox}>
            <Typography className={classes.infos}>
              INTERNSHIP - 2021{" "}
              <span className={classes.infosGrey}> : TRIUM, IT</span>
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 3,
              textAlign: "center",
            }}
          >
            <Avatar
              src={MyPhoto}
              alt="My Logo"
              sx={{
                all: "initial",
                display: "inline-block",
                height: "300px",
                widht: "300px",
                ":hover": {
                  border: "12px solid #007AF7",
                  borderRadius: "10px",
                },
              }}
            />
          </Box>
          <Box className={classes.hobbies}>
            <Typography className={classes.title}>
              what i <span className={classes.titleBlue}>like.</span>
            </Typography>
          </Box>
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <h1 className="textHobbies">FOOTBALL</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">MUSIC</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">NETFLIX</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">GYM</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">FASHION</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">CODE</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">FOOTBALL</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">MUSIC</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">NETFLIX</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">GYM</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">FASHION</h1>
              </div>
              <div class="slide">
                <h1 className="textHobbies">CODE</h1>
              </div> 
            </div>
          </div>
          
        </Box>
        </section>
      </Box>

      <Projects />
    </>
  );
}

export default Aboutme;
