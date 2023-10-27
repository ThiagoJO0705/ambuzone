import {useState, useEffect } from "react";
import {FaLocationDot as LocalizacaoIcon} from 'react-icons/fa6'
import {AiOutlinePlus as AumentarIcon} from 'react-icons/ai'
import {AiOutlineMinus as DiminuirIcon} from 'react-icons/ai'
import haversine from 'haversine-distance';
import styles from './Hospitais.module.css'
import {Link} from "react-router-dom";
export default function Hospitais() {
const [userLocation, setUserLocation] = useState(null);
const [raioBusca, setRaioBusca] = useState(1000); // Valor padrão de 1000 metros
 
 
// Função para aumentar o raio de busca
  const aumentarRaio = () => {
    if (raioBusca < 5000){
    setRaioBusca(raioBusca + 1000); // Aumenta em 1000 metros
    }
  };
 
  // Função para diminuir o raio de busca
  const diminuirRaio = () => {
    if (raioBusca > 1000) {
      setRaioBusca(raioBusca - 1000); // Diminui em 1000 metros
    }
  }
 
useEffect(() => {
  // Função para obter a localização do usuário
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
 
        setUserLocation(userCoords);
      });
    }
  };
 
  getUserLocation();
}, []);  
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
          radius: raioBusca, //raio em metros para busca
          type: "hospital", // Tipo de lugar a ser pesquisado
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const hospitalsWithDistance = results.map((hospital) => {
              const hospitalCoords = {
                lat: hospital.geometry.location.lat(),
                lng: hospital.geometry.location.lng(),
              };
              const distance = haversine(userLocation, hospitalCoords);
 
              // Condicionando a unidade de medida
              const formattedDistance = distance+300 >= 1000 ? `${((distance+300) / 1000).toFixed(2)} km` : `${Math.round(distance+300)} m`;
     
              // Adicionando a distância ao objeto do hospital
              return {
                ...hospital,
                distance: formattedDistance,
              };
            });
     
            setHospitais(hospitalsWithDistance);
            console.log(hospitalsWithDistance);
            console.log('Hospitais capturados');
          } else {
            console.error('Erro ao buscar hospitais:', status);
          }
        }
      );
    };
 
    document.head.appendChild(script);
  }, [userLocation, raioBusca]);
 
 
  return (
    <div className={styles.container}>
      <div className={styles.cabecalho}>
      <div className={styles.titulo}>
      <p><LocalizacaoIcon/> São Paulo</p>
      <h1>Hospitais Próximos</h1>
      </div>
      <div className={styles.raioDeBusca}>
      <p>Raio de busca: {raioBusca+'m'}</p>
      <p><AumentarIcon onClick={aumentarRaio}/></p>
      <p><DiminuirIcon onClick={diminuirRaio}/></p>
      </div>
      </div>
      <ul>
        {hospitais.map((hospital) => (
          <li key={hospital.place_id}>
            <strong>{hospital.name} | <LocalizacaoIcon/>{hospital.distance}</strong>
            <p>{hospital.vicinity}</p>
            <Link to='/'><button>Definir Destino</button></Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
 