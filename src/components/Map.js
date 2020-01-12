import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext);

  // console.log(state);
  if(!currentLocation) {
    return (
      <ActivityIndicator size="large" style={{ marginTop: 150 }} />
    )
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      strokeColor="#ec38bc" // fallback for when `strokeColors` is not supported by the map-provider
      strokeColors={[
        '#7303c0',
        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
        '#ec38bc'
      ]}
      strokeWidth={3}

    >
      <Circle
        center={currentLocation.coords}
        radius={25}
        strokeColor="rgba(115, 3, 192, 1.0)"
        fillColor="rgba(115, 3, 192, 0.3)"
      />

    <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 400
  }
});

export default Map;
