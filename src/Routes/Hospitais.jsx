import React, { useState, useEffect } from "react";

export default function Hospitais({ userLocation }) {
  const [hospitais, setHospitais] = useState([]);

  useEffect(() => {
    if (!userLocation) {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAsBhXcnErJepuDKf6qyO3yAyToVXsxXxc&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const service = new window.google.maps.places.PlacesService(document.createElement("div"));
      service.nearbySearch(
        {
          location: userLocation,
          radius: 5000, // Defina um raio de pesquisa em metros
          type: "hospital", // Tipo de lugar a ser pesquisado
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setHospitais(results);
          } else {
            console.error("Erro ao buscar hospitais:", status);
          }
        }
      );
    };

    document.head.appendChild(script);
  }, [userLocation]);

  return (
    <div className="container">
      <h1>Hospitais Próximos</h1>
      <ul>
        {hospitais.map((hospital) => (
          <li key={hospital.place_id}>
            <strong>{hospital.name}</strong>
            <p>{hospital.vicinity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
