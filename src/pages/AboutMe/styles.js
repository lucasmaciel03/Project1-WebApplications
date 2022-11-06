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
     textAlign: "left", marginLeft: "40px",
    },
    nameBox: {
     textAlign: "left", marginTop:"15px",  marginLeft: "40px",
    },
    titleBox1: {
      margin: "0",
          height: "100vh",
          textAlign: "center",
          ml:3
    },
    textInfo:{
      // margin: "20px 20px",
      fontFamily: "Poppins",
      fontStyle: "bold",
      fontWeight: "700",
      marginLeft: "40px",
      textAlign: "justify",
      display: "inline-block",
      color: "#808080",
      fontSize: "20px",
      userSelect: "none",
    },
    infosBox: {
      marginTop: "30px",
      marginLeft: "40px",
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
        color: "#808080",
    },
    hobbies: {
     marginTop:'50px', marginLeft:'40px',
    },
    texthobbies:{
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontStyle: 'italic',
      marginTop: '25px',
      color: '#007AF7',
    },

    
    [theme.breakpoints.down("lg")]: {
        title: {
          fontSize: "100px",
          textAlign:"center",
        },
        titleBox: {
          textAlign: "center",
          marginLeft: "0px",
          margingTop: "0px"
        },
        titleBox1: {
          textAlign: "center",
          ml:0,
        },
        nameBox:{
          textAlign: "center",
          marginLeft: "0px",
          marginTop: "0px",
        },
        textinfoBox:{
          marginTop: "0px",
          textAlign: 'justify',
          hyphens: 'auto',
          wordSpacing: '-0.05em',

        },
        infosBox:{
          marginTop:"0px",
          marginLeft: "0px",
          textAlign: "center",
        },
        textInfo:{
          margin: "20px 20px",
        },
        infos:{
          margin: "20px 20px",
        },
        hobbies:{
          textAlign:'center',
        },
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
