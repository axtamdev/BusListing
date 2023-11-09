import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "./Map";
import ETAListView from "./ETAListView";

const BusDetail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <Map />
            </View>
        <View style={styles.border}></View>
            <View style={styles.listContainer}>
                <ETAListView />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    mapContainer: {
        flex: 1
    },
    border: {
        height: 4,
        backgroundColor: 'red',
    },
    listContainer: {
        flex: 1
    }
})
export default BusDetail