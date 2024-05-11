import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    const { data } = props;

    if (!data || !data.ready) {
        return null; // or you can render a loading state
    }

    return (
        <div className="WeatherInfo">
            <h1>{data.city}</h1>
            <ul>
                <li><FormattedDate date={data.date} /></li>
                <li className="text-capitalize">{data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="weather-icon-temp">
                        {data.icon && <WeatherIcon code={data.icon} size={52} />}

                        <div className="temperature-container mt-1">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {data.humidity}%</li>
                        <li>Wind: {Math.round(data.wind)}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}