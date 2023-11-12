import React, {useEffect} from "react";
import { StyleSheet, View, Text} from "react-native";
import Map from "./components/Map";
import ETAListView from "./components/ETAListView";
import { useGetETADate} from "../hook/getETADate";

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

export default function BusDetail({route, navigation}){
    const {routeNumber, destination, busStopId, long, lat, busStopName, serviceType} = route.params
    const [etaData] = useGetETADate({busStopId:busStopId, service_type: serviceType, route: routeNumber})

    useEffect(()=>{
        navigation.setOptions({title: routeNumber + " 往 " + destination})
    })

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <Map busStopId={busStopId} long={long} lat={lat}/>
            </View>
        <View style={styles.border}></View>
            <View style={styles.listContainer}>
                <ETAListView busData = {etaData} busStopName = {busStopName}/>
            </View>
        </View>
    );
}