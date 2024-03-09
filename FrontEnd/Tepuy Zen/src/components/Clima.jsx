import { useState } from "react";
import clima from "../assets/img/clima.jpg"

const api = {
  key: "09bbe7f877d39fdf782ccd28a15bc846",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  let Name = "Ciudad Bolivar";

  /*
    Se presiona el botón de búsqueda. Realice una llamada de recuperación a la API de Open Weather Map.
  */
  const searchPressed = () => {
    const url = `${api.base}weather?q=${Name}&units=metric&APPID=${api.key}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
        setShowResults(true);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del clima: ", error);
      });
  };

  /*
    Se presiona el botón de cerrar. Ocultar los resultados de la API.
  */
  const closePressed = () => {
    setShowResults(false);
  };

  return (
    <div className="p-4">
      <header className="w-4/5 rounded-2xl p-5 mx-auto bg-[#DDE7C7] dark:bg-[#C6D3A9]">
        {/* Boton  */}
        <div className="title flex items-center justify-center">
          <button onClick={searchPressed} className="px-4 py-2 mr-1 tracking-widest text-white rounded-lg animate-bounce" style={{ background: '#77BFA3' }}>
            Ver Clima
          </button>
          {showResults && (
            <button onClick={closePressed} className="px-5 rounded-full py-2  bg-red-500 text-white animate-bounce inline-block transition duration-300 ease-in-out" >
              X
            </button>
          )}
        </div>

        {/* Si el clima no está definido y se han mostrado los resultados, muestre los resultados de la API */}
        <div className={`text-center mt-3 transition duration-300 ease-in-out ${showResults ? 'opacity-100' : 'opacity-0 h-0'} overflow-hidden`}>
          {showResults && weatherData ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-8">

            <div className="flex items-end justify-center">
            <img src={clima} alt="User Profile" className="w-2/5 rounded-full " />
            </div>

            <div className="grid items-end justify-center">
              {/* Ubicacion  */}
              <p className="amatic-sc-regular text-4xl font-black mb-2">{weatherData.name}, {weatherData.sys.country}</p>
          
              {/* Temperatura Celsius  */}
              <p className="amatic-sc-regular text-3xl font-bold mb-2">Temperatura: {weatherData.main.temp}°C</p>
          
              {/* Condicion*/}
              <p className="amatic-sc-regular text-3xl font-bold mb-2">
                {weatherData.weather[0].main}
              </p>
              <p className="amatic-sc-regular text-3xl mb-4">
                ({weatherData.weather[0].description})
              </p>
            </div>

            <div className="grid items-end justify-center">
          
              {/* Humidity */}
            <p className="amatic-sc-regular text-3xl font-bold mb-2">Humedad: {weatherData.main.humidity}%</p>
          
               {/* Wind */}
            <p className="amatic-sc-regular text-3xl font-bold mb-2">
             Viento: {weatherData.wind.speed} {weatherData.wind.units || 'm/s'} a {weatherData.wind.deg}°</p>
              
                {/* Sunrise and Sunset */}
                <p className="amatic-sc-regular text-3xl font-bold mb-2">
                    Amanecer: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
                <p className="amatic-sc-regular text-3xl font-bold mb-2">
                    Aterdecer: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
                </p>
            </div>
          </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
}

export default Clima;