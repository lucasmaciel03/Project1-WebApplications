import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    tilteBox1:{
        marginTop:'0px',
    },
    title: {
        fontFamily: "Poppins",
        fontStyle: "italic",
        fontWeight: "700",
        display: "inline",
        fontSize: "80px",
        color: "#808080",
        userSelect: "none",
        
    },
    titleBlue: {
        color: "#007AF7",
    },
    titleBox: {
     textAlign: "left", marginLeft: "40px", 
    },
    githubbox:{
        display: 'flex',
        marginTop: '10px',
        marginLeft:'40px',
        alignItems: 'center',
    },
    iconStyle:{
        width: "70px", height: "70px", color: '#007AF7',
    },
    githubinfo:{
        marginLeft: "25px",
        fontFamily: "Poppins",
        display: "inline",
        fontSize: "30px",
        userSelect: "none",
        color: '#808080',
    },
    githubblue:{
        color: "#007AF7"
    },
    avatargit:{
        width: '36px', height: '36px', marginLeft: '10px'
    },
    cardprojects:{
        maxWidth: 345, marginLeft: "40px", marginTop: '20px', mb: 5,  display:'inline-block'
    },
    [theme.breakpoints.down("lg")]: {
        title:{
            marginTop: '0px',
            fontSize:'30px',
        },
        titleBox:{
            margin:'20px 20px',
            textAlign: 'center',
    
        },
        githubbox:{
            margin:'10px 10px',
            alignContent: 'center',
        },
        githubinfo:{
            fontSize:'15px'
        },
        iconStyle:{
            height:'40px',
            marginLeft:'10px'
        },
        avatargit:{
            marginLeft:'0px',
            height:'30px',
            width:'30px'    
        },
        cardprojects:{
            display:'block',
            margin: 'auto',
            width: '50%',
            marginTop:'20px',
        }
      },
      [theme.breakpoints.down("md")]: {
      },
      [theme.breakpoints.down("sm")]: {
      },
      [theme.breakpoints.down("xs")]: {
      },
}));
