'use client';

import React, {useEffect} from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from '../[locale]/kontakt/kontakt.module.css';


export default function GoogleMaps () {

    const mapRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        
        const initializeMap = async() => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: 'weekly',
            });
            const {Map} = await loader.importLibrary('maps');

            const locationInMap = {
                lat: 43.329750061035156,
                lng: 21.889556884765625,
            };

            const {Marker} = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;

            const options: google.maps.MapOptions = {
                center: locationInMap,
                zoom: 15,
                mapId: 'DEMO_MAP_ID',
            };
            const map = new Map(mapRef.current as HTMLDivElement, options);

            const marker = new Marker({
                map: map,
                position: locationInMap,
            })
        };
        initializeMap();
    },[]);
    
    return (
        <div className={styles.mapContainer} ref={mapRef}>Google Maps</div>
    )
}
