import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home"

function App() {
    return(
        <div className="App">
            <Navbar />
            <Routes>    
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;