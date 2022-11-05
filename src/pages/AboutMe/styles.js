import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "Poppins",
        fontStyle: "italic",
        fontWeight: "700",
        display: "inline",
        fontSize: "100px",
        color: "#808080",
        userSelect: "none",
    },
    titleBlue: {
        color: "#007AF7",
    },
    titleBox: {
      width: "100%", textAlign: "left",
    },
    nameBox: {
      width: "100%", textAlign: "left", marginTop:"15px"
    },
    titleBox1: {
      margin: "0",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          ml:3
    },
    btnStyle: {
      backgroundColor:'#007AF7',
      borderRadius:2,
      width:'80px',
      height:'40px',
      margin:'0px 2px',
      fontSize:'12px'
    },
    infos: {
        fontFamily: "Poppins",
        fontStyle: "italic",
        display: "inline",
        fontSize: "20px",
        color: "#007AF7",
        userSelect: "none",
    },
    infosGrey: {
      fontFamily: "Poppins",
        fontStyle: "italic",
        fontWeight: "700",
        display: "inline",
        fontSize: "20px",
        color: "#808080",
        userSelect: "none",
        cursor:"pointer"
    },
    hobbies: {
      width: "100%", textAlign: "center", marginTop:'50px'
    },
    slider:{
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      width: '90%',
      height: '250px',
      margin: 'auto',
    },
    slidetrack: {
      display: 'flex',
      width: 'calc(2*6*250px)',
      animation: 'scrollAnimation 6s linear infinite',
      hover:{animationPlayState: 'paused'},
    },
    [theme.breakpoints.down("lg")]: {
        title: {
          fontSize: "100px",
          textAlign:"center",
        },
        titleBox: {
          textAlign: "center",
          ml:0,
        },
        titleBox1: {
          textAlign: "center",
          ml:0,
        },
        nameBox:{
          textAlign: "center"
        }
      },
      [theme.breakpoints.down("md")]: {
        title: {
          fontSize: "30px",
          ml:0,
        },
      },
      [theme.breakpoints.down("sm")]: {
        title: {
          fontSize: "25px",
          ml:0,
        },
      },
      [theme.breakpoints.down("xs")]: {
        title: {
          fontSize: "35px",
          ml:0,
        },
      },
}));
