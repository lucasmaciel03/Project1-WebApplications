import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  firstbox:{
    display: "flex",
    height: '100vh',
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "italic",
    fontWeight: "700",
    display: "inline",
    fontSize: "160px",
    color: "#007AF7",
    userSelect: "none",
  },
  titleGray: {
    color: '#808080'
  },
  scrollIcon:{
    width: "45px", height: "45px", cursor:'pointer', bgcolor:'transparent', color:'#808080', 
  },
  scrollTxt: {
    fontFamily: "Poppins", color: "#808080", fontSize: "12px",
  },
  iconStyle:{
    width: "35px", height: "35px"
  },
  // [theme.breakpoints.down("xl")]: {},
  // [theme.breakpoints.down("lg")]: {},
  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
  // [theme.breakpoints.down("xs")]: {},
  [theme.breakpoints.down("lg")]: {
    title: {
      fontSize: "140px",
    },
    scrollIcon: {
      display:"none",
    },
    scrollTxt: {
      display:"none",
    },
    firstbox: {
      marginTop: '50px',
      height: 'auto'
    },
  },
  [theme.breakpoints.down("md")]: {
    title: {
      fontSize: "60px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    title: {
      fontSize: "60px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    title: {
      fontSize: "60px",
    },
  },
}));
