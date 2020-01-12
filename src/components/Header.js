import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) => {
  return(
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    marginVertical: 12
  },
  header: {
    fontSize: 30
  }
})

export default Header;
