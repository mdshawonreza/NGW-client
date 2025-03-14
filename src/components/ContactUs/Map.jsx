import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { MapPin } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060
};

function Map() {
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(defaultCenter);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY // Replace with your API key
  });

  const onLoad = useCallback((map) => {
    setMap(map);
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(pos);
          map.setCenter(pos);
        },
        () => {
          console.log("Error: The Geolocation service failed.");
        }
      );
    }
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin">
          {/* <MapPin className="w-8 h-8 text-blue-500" /> */}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] md:h-[550px]  rounded-lg overflow-hidden shadow-lg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
      >
        <Marker position={currentPosition} />
      </GoogleMap>
    </div>
  );
}

export default Map;