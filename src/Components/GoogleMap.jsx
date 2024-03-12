import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
const GoogleMapComp = () => {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  console.log(import.meta.env.VITE_GOOGLE_MAP_API);
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapComp;
