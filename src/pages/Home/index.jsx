import { Typography } from "@mui/material";
import { Box } from "@mui/system";


function Home() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", border: "1px solid red"  }}>
      <Box sx={{ flexGrow: 1, width: "50%", border: "1px solid blue" }}>
        <Typography
          sx={{
            mt: 15,
            ml: 5,
            color: "#878A8E",
            fontSize: "20px",
            fontWeight: "light",
            letterSpacing: "4px"
          }}
        >
          Lucas Maciel
        </Typography>
        <Typography
          sx={{ ml: 5, fontSize: "70px", fontWeight: 800, lineHeight: "85px" }}
        >
          Web Developer 
          <Typography sx={{ fontSize: "70px", fontWeight: 800, lineHeight: "50px" }}>
            Student
          </Typography>
          <Typography sx={{ color: "#878A8E", fontSize: "20px", fontWeight: 500, mt:5 }}>
          Over the past years, I studied and I’ve worked as an IT Technician and at this moment I study in Viana do Castelo for Web Developer.
          </Typography>
          <Typography variant="h6" component="div" sx={{mt:5, color:"black", fontSize:"18px", fontWeight:'bold', cursor: "pointer"}}>
            View Projects
            <Typography variant="h6" component="div" sx={{color:"#878A8E", fontSize:"15px", fontWeight:'light',}}>
            or
            </Typography>
            <Typography variant="h6" component="div" sx={{color:"black", fontSize:"18px", fontWeight:'bold', cursor: "pointer",}}>
            Read about Me
            </Typography>
            </Typography>
        </Typography>
      </Box>
    </Box>
    
  );
}

export default Home;
