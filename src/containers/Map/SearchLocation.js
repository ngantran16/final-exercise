import React from 'react';
import { useMap } from 'react-leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import 'leaflet-geosearch/dist/geosearch.css';
import './Search.scss';

export default function LeafletgeoSearch() {
    const map = useMap(); 
    React.useEffect(() => {
      const provider = new OpenStreetMapProvider();
  
      const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        searchLabel: 'Where to?',
      });
  
      map.addControl(searchControl);
  
      return () => map.removeControl(searchControl)
    }, []);
  
    return null;
  }