import React from 'react';
const api = {
    key: "0cd94553bd9cfdf688887ff4b10e097f",
    base: "https://api.openweathermap.org/data/2.5/"
}
function Weather(){
    return(
        <div className="weather">
            <main>
                <div className="search-box">
                    <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    />
                </div>
            </main>
        </div>
    );
} 

export default Weather;