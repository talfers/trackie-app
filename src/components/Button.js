import React from 'react';
import { TouchableOpacity, Button as Btn, Text, StyleSheet } from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.background} onPress={() => {onPress()}}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#7303c0',
    borderRadius: 5,
    height: 48
  },
  button: {
    fontSize: 20,
    marginTop: 9,
    alignSelf: 'center',
    color: 'white'
  }
});

export default Button;
