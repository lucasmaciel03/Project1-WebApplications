import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { useStyles } from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import Weatherbg from "../../assets/imgs/weatherbg.gif";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tictactoe from "../../assets/imgs/tictactoe.png";

function Projects() {
  const classes = useStyles();

  const [reps, setReps] = useState([]);

  async function getReps() {
    // GET, POST, PUT, DELETE
    try {
      const res = await axios.get("https://api.github.com/users/lucasmaciel03");
      setReps(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getReps();
  }, []);
  return (
    <Box sx={{ height: "100vh" }}>
      <Box component="main" className={classes.tilteBox1}>
        <section id="projects">
          <Box className={classes.titleBox}>
            <Typography className={classes.title}>
              some of my best <span className={classes.titleBlue}>work.</span>
            </Typography>
          </Box>
          <Box className={classes.githubbox}>
            <GitHubIcon className={classes.iconStyle} />
            <Avatar
              alt="Remy Sharp"
              src={reps.avatar_url}
              className={classes.avatargit}
              sx={{ width: 36, height: 36, ml: 2 }}
            />
            <Typography className={classes.githubinfo}>
              <span>
                Name: <span className={classes.githubblue}>{reps.login} </span>|
              </span>{" "}
              Repositories:{" "}
              <span className={classes.githubblue}>{reps.public_repos}</span> |{" "}
              <span> Followers: </span>{" "}
              <span className={classes.githubblue}>{reps.followers}</span>
            </Typography>
          </Box>
          <Box sx={{ mt: "5" }}>
            <Card className={classes.cardprojects}>
              <CardMedia component="img" height="194" image={Weatherbg} />
              <CardContent sx={{ bgcolor: "#fff" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "", fontFamily: "Poppins", userSelect: "none" }}
                >
                  This project was made in the scope of the Web Applications
                  discipline.
                  <div sx={{ mt: "2px" }}>This is a weather application</div>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  sx={{
                    margin: "auto",
                    width: "50%",
                    border: "1px solid #007AF7",
                  }}
                >
                  Know More
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardprojects}>
              <CardMedia
                component="img"
                height="194"
                image="https://cdn.dribbble.com/users/63973/screenshots/2063711/media/09f28efa07c49ca080ed861f80677518.png"
              />
              <CardContent sx={{ bgcolor: "#fff" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "", fontFamily: "Poppins", userSelect: "none" }}
                >
                  This project was made in the scope to improve my personal
                  skills
                  <div sx={{ mt: "2px" }}>This is a Tic Tac Toe Web Game</div>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  sx={{
                    margin: "auto",
                    width: "50%",
                    border: "1px solid #007AF7",
                  }}
                >
                  Know More
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardprojects}>
              <CardMedia
                component="img"
                height="194"
                image="https://cdn.dribbble.com/users/150828/screenshots/2873686/todo_app_icon.jpg"
              />
              <CardContent sx={{ bgcolor: "#fff" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "", fontFamily: "Poppins", userSelect: "none" }}
                >
                  This project was made in the scope to improve my personal
                  skills
                  <div sx={{ mt: "2px" }}>This is a To Do App Web</div>
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{}}>
                <Button
                  sx={{
                    margin: "auto",
                    width: "50%",
                    border: "1px solid #007AF7",
                  }}
                >
                  Know More
                </Button>
              </CardActions>
            </Card>
          </Box>
        </section>
      </Box>
    </Box>
  );
}

export default Projects;
