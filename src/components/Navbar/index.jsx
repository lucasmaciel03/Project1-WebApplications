import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { useStyles } from "./styles";

const drawerWidth = 240;
const navItems = ["About", "Projects", "Resume", "Contact"];

function Navbar(props) {
  const classes = useStyles();
  console.log(classes);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ ml: 1, my: 2, color: "#007AF7", fontFamily: "Avenir" }}
      >
        Lucas Maciel
        <Typography variant="h6" component="div" className={classes.positon}>
          Júnior Web Developer
        </Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "left",
                fontFamily: "Avenir",
                color: "#808080",
                borderRadius: 10,
                userSelect: "none",
                ":hover": {
                  backgroundColor: "rgb(241, 244, 244)",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex",}}>
      <AppBar component="nav" className={classes.navbar}>
        <Toolbar sx={{ padding: "10px 10px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#007AF7", ml: 1, border:'1px solid #007AF7', borderRadius:'10px'}}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="Lucas Maciel"
            src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-M-virtual-keyboard-others-inmotus-design-5.png"
            sx={{ cursor: "pointer", ml: 3, height: "45px", width: "45px" }}
            onClick={() => {
              window.location.reload();
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              ml: 2,
              color: "#007AF7",
              fontFamily: "Avenir",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            Lucas Maciel
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#808080",
                fontSize: "12px",
                fontFamily: "Avenir",
                fontWeight: "light",
                userSelect: "none",
              }}
            >
              Júnior Web Developer
            </Typography>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#808080",
                  ml: 1,
                  fontFamily: "Avenir",
                  lineHeight: "15.6px",
                  fontWeight: "700px",
                  ":hover": {
                    textDecoration: "underline",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
