import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function temperature(unit, temp) {
        return unit === "celsius" ? Math.round(temp) + "°C" : Math.round((temp * 9) / 5 + 32) + "°F";
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {temperature(props.unit, props.data.temp.max)}
                </span>
                <span className="WeatherForecast-temperature-min">
                    {temperature(props.unit, props.data.temp.min)}
                </span>
            </div>
        </div>
    );
}
