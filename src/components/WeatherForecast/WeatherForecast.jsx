import './WeatherForecast.css';

const WeatherForecasts = (props) =>  {
    return (
            props.weatherForecasts.map((forecast, index) => ( // map through the weatherForecasts prop
                <div className="weather" key={index}>  
                    <h2>{forecast.day}</h2> 
                    <img src={forecast.img} alt={forecast.imgAlt} />
                    <p><span>conditions: </span>{forecast.conditions}</p>
                    <p><span>time: </span>{forecast.time}</p>
                </div>
            ))


   );
}

export default WeatherForecasts;