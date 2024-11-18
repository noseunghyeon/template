import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "700px",
  height: "400px",
};

const center = {
  lat: 37.481058,
  lng: 126.879349,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAnnCOmvGIovw3xCAyZ2DApF5alpV4cWNw">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
