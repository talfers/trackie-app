import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const TrackDetailScreen = ({navigation}) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(t => t._id === _id);
  const initalCoords = track.locations[0].coords;

  return (
    <>
      <Header title={track.name} />
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initalCoords
        }}
      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)}
          strokeColor="#ec38bc" // fallback for when `strokeColors` is not supported by the map-provider
      		strokeColors={[
      			'#7303c0',
      			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#ec38bc'
      		]}
      		strokeWidth={3}
        />
      </MapView>
      <Dashboard points={track.locations}/>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: '50%'
  }
});

export default TrackDetailScreen;
