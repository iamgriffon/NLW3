import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../images/map-marker.svg';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um abrigo no mapa</h2>
                    <p> Muita alegria está te esperando :) </p>
                </header>

                <footer>
                    <strong>São Paulo, </strong>
                    <span>SP </span>
                </footer>
            </aside>

            <Map 
                center={[-23.5571153, -46.5749173]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}>


                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

            </Map>

            <Link to='' className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
};

export default OrphanagesMap;