import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import MyPhoto from "../../assets/imgs/myPhoto.jpg";
import { useStyles } from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Weatherbg from "../../assets/imgs/weatherbg.gif";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
    <Box sx={{ height: "auto" }}>
      <Box component="main" className={classes.tilteBox1}>
        <Toolbar />
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

        <Card className={classes.cardprojects}>
          <CardMedia component="img" height="194" image={Weatherbg} />
          <CardContent sx={{ bgcolor: "#fff" }}>
            <Typography
              variant="body2"
              sx={{ color: "", fontFamily: "Poppins", userSelect:'none'  }}
            >
              This project was made in the scope of the Web Applications
              discipline.
              <div sx={{ mt: "2px" }}>This is a weather application</div>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton sx={{ ml: "145px" }}>
              <VisibilityIcon sx={{ ":hover": { color: "#007AF7" } }} />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.cardprojects}>
          <CardMedia
            component="img"
            height="194"
            image="https://cdn.dribbble.com/users/317853/screenshots/7171494/media/898b3a307c9ffbbba7b8db0b53c8605c.png"
          />
          <CardContent sx={{ bgcolor: "#fff" }}>
            <Typography
              variant="body2"
              sx={{ color: "", fontFamily: "Poppins", userSelect:'none' }}
            >
              This project was made in the scope to improve my personal skills
              <div sx={{ mt: "2px" }}>This is a Tic Tac Toe Web Game</div>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton href="https://lucasmaciel03.github.io/TicTacToe/" sx={{ ml: "145px" }}>
              <VisibilityIcon  sx={{ ":hover": { color: "#007AF7" } }} />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

export default Projects;
