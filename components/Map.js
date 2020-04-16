
import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import styles from '../Styles/styles'

const Map = ({ latitude, longitude }) => {
    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.mapView}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    coordinate={
                        {
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }
                    }
                >
                </MapView.Marker>
            </MapView>
        </View>

    )
}

export default Map