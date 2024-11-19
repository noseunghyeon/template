import React from "react";
//https://velog.io/@bommy5799/%EB%A6%AC%EC%95%A1%ED%8A%B8-Google-Map-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const center = {
  lat: 37.481058,
  lng: 126.879349,
};

// test

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
      <GoogleMap
        mapContainerClassName="w-[700px] h-[400px]"
        // mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <></>
        <MarkerF
          position={center}
          icon={
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }
        ></MarkerF>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
