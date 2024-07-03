import React from "react";
import MapView, { Marker } from "react-native-maps";
export default function Maps() {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: 19.205446769970518,
        longitude: 72.98316883996013,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      zoomTapEnabled={true}
      showsCompass={false}
    >
      <Marker
        coordinate={{
          latitude: 19.205446769970518,
          longitude: 72.98316883996013,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        title="Marker"
      />
    </MapView>
  );
}
