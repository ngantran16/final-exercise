import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, withLeaflet } from 'react-leaflet';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeafletgeoSearch from './SearchLocation';
import './Search.scss';

const Search = () => {
  const position = [51.505, -0.09];

  return (
    <div>
      <Header />
      <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LeafletgeoSearch
          closeResultsOnClick={true}
          openSearchOnLoad={true} 
          showMarker={true}
          zoom={5}
          position="topleft" />
      </MapContainer>
      <Footer />
    </div>
      
  )
}

export default Search;