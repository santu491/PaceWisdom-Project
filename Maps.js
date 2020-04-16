import React from 'react';
import MapView from 'react-native-maps';
// import { MapView } from 'expo'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Maps extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView style={styles.mapStyle} /> */}
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        {/* <Text>hello</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   mapStyle: {
  //     width: Dimensions.get('window').width,
  //     height: Dimensions.get('window').height,
  //   },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});
