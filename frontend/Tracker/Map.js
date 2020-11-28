import React from 'react'
import {MapContainer as MapLeaflet, TileLayer, ChangeView} from 'react-leaflet';

import './Map.css';
import { PlotData } from './Utilities';


function Map({countries,casesType, center,zoom}) {
    return (
        <div className="map">
            
            <MapLeaflet center= {center} zoom={zoom}>
                
                <TileLayer
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            
            {PlotData(countries, casesType)}
            

            </MapLeaflet>
            
        </div>
        
    );
    
}


export default Map
