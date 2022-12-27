import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Loader from "../components/utils/Loader";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapContainer = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GMAPS_API_KEY,
  });
  
  if (!isLoaded) return <Loader />;
  
  if (loadError) {
    console.log("Error cargando el mapa")
    return <div>El mapa no ha podido ser cargado.</div>;
  }


  return (
         <GoogleMap
           mapContainerStyle={containerStyle}
           center={center}
           zoom={10}
         >
           {/* Child components, such as markers, info windows, etc. */}
           <></>
         </GoogleMap>
     );
}

export default MapContainer
