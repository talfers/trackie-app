import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = () => {
  const { state: {name, locations, recording},
          startRecording,
          stopRecording,
          changeName
        } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Name"
          value={name}
          onChangeText={(text) => {changeName(text)}}
        />
      </Spacer>
      <Spacer>
      {recording
        ? <Button title="Stop" onPress={() => stopRecording()}/>
        : <Button title="Start Recording" onPress={() => startRecording()}/>
      }
      </Spacer>
      <Spacer>
      {
        !recording && locations.length > 2
        ? <Button title="Save Track" onPress={() => {saveTrack()}} />
        : null
      }
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({});

export default TrackForm;
