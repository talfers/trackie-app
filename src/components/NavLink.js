import React, {useState} from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, routeName, title}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
      <Spacer>
        <Text style={styles.link}>{title}</Text>
      </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#7303c0'
  }
})

export default withNavigation(NavLink);
