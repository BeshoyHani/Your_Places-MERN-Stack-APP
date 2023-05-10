import React, { useRef, useEffect } from 'react';
import './Map.css';
import map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;
 
  useEffect(() => {
    new map({
      target: mapRef.current.id,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [center.lng, center.lat],
        zoom: zoom
      })
    });
  }, [center, zoom]);
 
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};
 
export default Map;