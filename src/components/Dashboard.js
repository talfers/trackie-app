import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Dashboard = ({points}) => {
  const createSpeedData = (locations) => {
    const speedList = locations.map(loc => {
      const milesPerHour = loc.coords.speed * 2.23694;
      return milesPerHour;
    });
    let sum = speedList.reduce((previous, current) => current += previous);
    const speedAvg = sum / speedList.length;
    const speedMax = Math.max(...speedList)
    return {
      speedList,
      speedMax,
      speedAvg
    }
  }
  speedData = createSpeedData(points);
  const altList = points.map(p => {
    const feet = p.coords.altitude * 3.28084;
    return feet;
  });
  return (
    <View style={styles.grid}>
      <View style={styles.box}>
        <Text style={styles.title}>Max Speed: </Text><Text style={styles.text}>{speedData.speedMax.toFixed(2)} mph</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Avg Speed: </Text><Text style={styles.text}>{speedData.speedAvg.toFixed(2)} mph</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Start Elevation: </Text><Text style={styles.text}>{altList[0].toFixed(2)} ft</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Finish Elevation: </Text><Text style={styles.text}>{altList[altList.length - 1].toFixed(2)} ft</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Min Altitude: </Text><Text style={styles.text}>{Math.min(...altList).toFixed(2)} ft</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Max Altitude: </Text><Text style={styles.text}>{Math.max(...altList).toFixed(2)} ft</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Vertical: </Text><Text style={styles.text}>{(altList[altList.length - 1] - altList[0]).toFixed(2)} ft</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: '40%',
    height: 60,
    marginVertical: 5,
    paddingBottom: 5,
    justifyContent: 'flex-end',
    position: 'relative'

  },
  title: {
    fontSize: 10,
    position: 'absolute',
    top: 2,
    left: 2
  },
  text: {
    alignSelf: 'center',
    fontSize: 20
  }
});

export default Dashboard;
