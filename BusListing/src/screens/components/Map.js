import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker }from 'react-native-maps'

const Map = ({long, lat}) => {
    const markerCoordinates = {
        latitude: lat, 
        longitude: long
    };

    return(
        <View style={styles.container}>
            <MapView style={styles.mapView}
        initialRegion={{
          latitude: markerCoordinates.latitude,
          longitude: markerCoordinates.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}>
            <Marker coordinate={markerCoordinates} />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create( {
    container:{
        flex: 1
    },
    mapView:{
        flex: 1,
    }
    })
export default Map