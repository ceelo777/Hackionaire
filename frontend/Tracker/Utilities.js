import React from "react";
import { Circle, Popup } from  "react-leaflet";
import numeral from "numeral";

export  const sortData = (data) => {
    const sortedData= [...data];

    sortedData.sort((x,y) => {
        if(x.cases > y.cases)
            return -1;
        else
            return 1;    
    })

    return sortedData;
}

//Plot the areas on Map
const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 1600,
    },
  };


  export const PrintStatUnits = (info) =>
  info ? `+${numeral(info).format("0.0a")}` : "+0";

export const PlotData = (data, casesType = "cases") =>

data.map((country) => (
  <Circle
    center={[country.countryInfo.lat, country.countryInfo.long]}
    color={casesTypeColors[casesType].hex}
    fillColor={casesTypeColors[casesType].hex}
    fillOpacity={0.4}
    
    radius={
      Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
    }
  >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));