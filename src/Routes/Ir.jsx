import {useState, useEffect, useContext, useMemo, useCallback } from "react";
import { DadosParaRotaContext } from "../Context/DadosParaRota";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
  InfoBox
} from "@react-google-maps/api";
 

const mapStyles = [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#7c93a3',
        },
        {
          lightness: '-10',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#a0a4a5',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#62838e',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#dde3e3',
        },
      ],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#3f4a51',
        },
        {
          weight: '0.30',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'poi.attraction',
      elementType: 'all',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.government',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'all',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.place_of_worship',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.school',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.sports_complex',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: '-100',
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#bbcacf',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          lightness: '0',
        },
        {
          color: '#bbcacf',
        },
        {
          weight: '0.50',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#a9b4b8',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          invert_lightness: true,
        },
        {
          saturation: '-7',
        },
        {
          lightness: '3',
        },
        {
          gamma: '1.80',
        },
        {
          weight: '0.01',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#a3c7df',
        },
      ],
    },
  ];
 
    const markers = [
        {
          id: 1,
          name: "Sua Localização",
        }
      ];
 
export default function Ir(){
    console.log('Renderizando aba Ir')
    const {dados} = useContext(DadosParaRotaContext)
    const hospitalDefinidoCoords = {lat: dados.lat,
                                    lng: dados.lng}
    console.log(dados)
    const [userLocation, setUserLocation] = useState(null);
    const [mostrarMensagem, setMostrarMensagem] = useState(true);
    // const [response, setResponse] = useState(null)
    if (dados == {
      nome: 'nome',
      lat: 'lat',
      lng : 'lng'
  }){
    setMostrarMensagem(false)
  }
    const [rota, setRota] = useState(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
      });
   
      const [activeMarker, setActiveMarker] = useState(null);
   
      const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };

      // const directionsServiceOptions = ()=>{
      //   // Verifique se as coordenadas de origem (userLocation) e destino (hospitalDefinidoCoords) estão definidas.
      //   if (userLocation && hospitalDefinidoCoords != {lat: 'lat', lng:'lng'}) {
      //     useMemo<google.maps.DirectionsRequest>( () => {
      //       return{
      //       origin: userLocation,
      //       destination: hospitalDefinidoCoords,
      //       travelMode: 'DRIVING',
      //     }}, [userLocation, hospitalDefinidoCoords]);}}

      //     const directionsCallback = useCallback((res) => {
      //       if (res !== null && res.status === "OK") {
      //         setResponse(res);
      //       } else {
      //         console.log(res);
      //       }
      //     }, []);

      //     const directionsRendererOptions = useMemo<any>(() => {
      //       return {
      //         directions: response,
      //       };
      //     }, [response]);

      // Função para calcular a rota
  const calcularRota = () => {
    // Verifique se as coordenadas de origem (userLocation) e destino (hospitalDefinidoCoords) estão definidas.
    if (userLocation && hospitalDefinidoCoords) {
      setMostrarMensagem(false); // Feche a mensagem
      setRota(null); // Limpe a rota existente
      setResponse(null); // Limpe a resposta existente

      // Configuração das opções do serviço de direções
      const directionsServiceOptions = {
        origin: userLocation,
        destination: hospitalDefinidoCoords,
        travelMode: "DRIVING"
      };

      // Solicitar a rota ao serviço de direções
      directionsService.route(directionsServiceOptions, (result, status) => {
        if (status === "OK") {
          setRota(result);
        } else {
          console.error("Houve um erro ao calcular a rota:", status);
        }
      });
    }
  };
   
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
     
 
    return(
        <>
      <div className="container">
        <div style={{ height: "100vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={userLocation}
              zoom={15}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "100vh" }}
              options={{
                disableDefaultUI: true, // Isso remove os controles padrão
                styles: mapStyles // Aplicar as estilizações
              }}
            >
              {markers.map(({ id, name }) => (
                <MarkerF
                  key={id}
                  position={userLocation}
                  onClick={() => handleActiveMarker(id)}
                  icon={{
                    url: "../../public/img/sua-localizacao-icon.png",
                    scaledSize: { width: 40, height: 40 }
                  }}
                  animation={window.google.maps.Animation.DROP}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
              {userLocation && hospitalDefinidoCoords != {lat:'lat', lng:'lng'} && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
          {mostrarMensagem && (
          <InfoBox onCloseClick={()=>setMostrarMensagem(false)}>
            <div className="mensagem-container">
              <p>Deseja gerar uma rota para {dados.name}?</p>
              <button onClick={calcularRota}>Gerar Rota</button>
            </div>
          </InfoBox>
          )}  
          </GoogleMap>
          ) : null}
        </div>
        {mostrarMensagem && rota && (
  <div className="mensagem-container">
    <p>Deseja gerar uma rota para {dados.name}?</p>
    <button onClick={calcularRota}>Gerar Rota</button>
    <button onClick={() => setMostrarMensagem(false)}>Fechar</button>
  </div>
)}

<DirectionsRenderer directions={rota} />
      </div>
    </>
  );
}