import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  positon: {
    flexGrow: 1,
    color: "#808080",
    fontSize: "12px",
    fontFamily: "Avenir",
    fontWeight: "light",
  },
  navbar:{
    backgroundColor: "transparent", 
    boxShadow: 'none',
  },
  [theme.breakpoints.down("lg")]: {
    navbar:{
      backgroundColor: 'rgb(241, 244, 244)',
    }
  },
}));
