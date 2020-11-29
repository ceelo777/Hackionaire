import React from 'react'
import {MapContainer as MapLeaflet, TileLayer, ChangeView, useMap, useMapEvent} from 'react-leaflet';

import './Map.css';
import { PlotData } from './Utilities';

function Component({center,zoom}){
    const map= useMap();
    map.setView(center,zoom);    
    
    return null;

}


function Map({countries,casesType, center,zoom}) {
    console.log("CASES TYPE: ",casesType);
    console.log(typeof(casesType));
    return (
        <div className="map">
            
            <MapLeaflet center= {center} zoom={zoom}>
                <Component center={center} zoom={zoom}/>
                <TileLayer
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            
            {PlotData(countries, casesType)}
            

            </MapLeaflet>
            
        </div>
        
    );
    
}


export default Map
