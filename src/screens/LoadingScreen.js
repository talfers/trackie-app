import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const LoadingScreen = () => {
  const {state, tryLocalSignin} = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin()
  }, [])
  return (
    <View><Text>loading...</Text></View>
  )
}

const styles = StyleSheet.create({});

export default LoadingScreen;
