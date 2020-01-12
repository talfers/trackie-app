//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';

const TrackCreateScreen = ({isFocused}) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, state.recording)
  }, [state.recording])
  const [err] = useLocation(isFocused || state.recording, callback)

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Header title="Create A Track" />
      <Map />
      {err ? <Text>Please enable location permissions</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />

}


const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
