import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker }from 'react-native-maps'

const Map = () => {
    const markerCoordinates = { latitude: 22.37577, longitude: 114.10800 };
22.37591011525515, 114.10833961302471
    return(
        <View style={styles.container}>
            <MapView style={styles.mapView}
        initialRegion={{
          latitude: 22.37577,
          longitude: 114.10800 ,
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