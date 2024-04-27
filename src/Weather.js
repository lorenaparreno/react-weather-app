import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Ener a city"
                            className="form-control"
                            autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>
                    Friday 11:00
                </li>
                <li>
                    Mostly Cloudy
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="Mostly Cloudy"
                            className="float-left"
                        />

                        <span className="temperature">8</span>
                        <span className="unit">℃</span>

                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 2%</li>
                        <li>Humidity: 58%</li>
                        <li>Wind: 14km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}