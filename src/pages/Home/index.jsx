import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Logo from "../../assets/imgs/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Aboutme from "../AboutMe";
import { useStyles } from "./styles";

function Home(props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.firstbox }>
        <Box
          component="main"
          sx={{
            p: 3,
            margin: "auto",
            width: "100%",
            textAlign: "center",
            verticalAlign: "50%",
          }}
        >
          <Toolbar />
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography className={classes.title}>
              Hello <span className={classes.titleGray}>, I'm</span>
            </Typography>
          </Box>
          <Box sx={{}}>
            <Avatar
              src={Logo}
              alt="My Logo"
              sx={{
                all: "initial",
                display: "inline-block",
                height: "auto",
                widht: "auto",
              }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/-lucasmaciel/"
              target="_blank"
              sx={{ color: "#007AF7" }}
            >
              <LinkedInIcon className={classes.iconStyle} />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              href="https://www.instagram.com/17lucasz/"
              target="_blank"
              sx={{ color: "#007AF7" }}
            >
              <InstagramIcon className={classes.iconStyle} />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/17lucasz"
              target="_blank"
              sx={{ color: "#007AF7", ml: "5" }}
            >
              <TwitterIcon className={classes.iconStyle} />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/lucasmaciel03"
              target="_blank"
              sx={{ color: "#007AF7", ml: "5" }}
            >
              <GitHubIcon className={classes.iconStyle} />
            </IconButton>
          </Box>
          <Box sx={{ mt: 10, textAlign:'center'}}>
            <Typography
            className={classes.scrollTxt}
        
            >
              Scroll for more
            </Typography>
              <KeyboardDoubleArrowDownIcon
                className={classes.scrollIcon}
              />
          </Box>
        </Box>
      </Box>
      <Aboutme />
    </>
  );
}

export default Home;
