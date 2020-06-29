import React, { useState, useEffect } from "react";
import createEnturService from '@entur/sdk'


const service = createEnturService({ clientName: 'Alestrom-infoskjermkurs' })

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);

    useEffect(() => {
        service.getBikeRentalStationsByPosition(
            {latitude: 59.9289553, longitude: 10.7586829},
            230
        )
        .then((data) => setBikeStations(data)); 
    }, []);

    return (
        <div className = "BikeStations">
            <h3>Bysykkel</h3>
            {bikeStations.map((stationData) => (
                <Station key={stationData.id} station={stationData} />
            ))}
        </div>
    );
};

export default Bikes;


const Station = (props) => {
    const { station } = props;


    return(
        <div>
            {station.name} - {station.bikesAvailable} : {station.spacesAvailable}
        </div>
    )
}