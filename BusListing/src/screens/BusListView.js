import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import BusListCell from './components/BusListCell';
import { useNavigation } from '@react-navigation/native';
import { handleData } from '../utilities/busDataUtils';
import { RefreshControl } from 'react-native-gesture-handler';
import { SelectedBusStops } from '../utilities/selectedBusStops';

export default function BusListView({ route }) {
    const { busStopList, ro } = route.params;
    const [refreshing, setRefreshing] = useState(false)
    const [filteredData, setFilteredData] = useState([])
    const navigation = useNavigation();
    const busStopsDataArray = []
    var selectedBusStops

    const fetchSelectedBusStopDataAPI = async (selectedStop) => {
        if (selectedStop) {
            fetch(`https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/${selectedStop.stop}`)
                .then(response => response.json())
                .then(response => {
                    const busStopData = [{
                        busStopETA: response.data,
                        busStopName: selectedStop.name_tc,
                        busStopLong: selectedStop.long,
                        busStopLat: selectedStop.lat,
                        busStopId: selectedStop.stop
                    }]
                    busStopsDataArray.push(busStopData.map((data) => handleData(data)))
                })
                .catch((error) => console.log(error))
        }
    }

    const fetchSelectedBusStopData = () => {
        const selectedBusStopArray = SelectedBusStops.map((stop) => getBusStopInfo(stop))
        selectedBusStops = selectedBusStopArray
        
        if (selectedBusStops.length > 0) {
            selectedBusStops.forEach((busStop) => {
                fetchSelectedBusStopDataAPI(busStop)
            })
            setFilteredData(busStopsDataArray)
        }
    }

    useEffect(() => {
        fetchSelectedBusStopData()
    }, [])

    function getBusStopInfo(stop) {
        const busStop = busStopList.data.find(item => (item.stop === stop))

        if (busStop) {
            const { stop, name_tc, lat, long } = busStop
            return { stop, name_tc, lat, long }
        } else {
            return null
        }
    }

    const onRefresh = async () => {
        setRefreshing(true)
        await fetchSelectedBusStopData()

        setRefreshing(false)
    }

    const renderItem = ({ item }) => {
        return (
            <>
                {item[0].map((element, index) => (
                    <View key={index}>
                        <BusListCell
                            key={index}
                            itemData={{
                                number: element.route,
                                destination: element.destination,
                                busStopName: element.busStop,
                                long: element.busStopLong,
                                lat: element.busStopLat,
                                minute: element.minutesDifference,
                                service: element.serviceType,
                            }}
                            
                            onPress={() => navigation.navigate('路線資料', { routeNumber: element.route, destination: element.destination, busStopId: element.busStopId, busStopName: element.busStop, long: element.long, lat: element.lat, serviceType: element.serviceType })}
                        />
                        {index < item.length - 1 && <View style={styles.itemSeparator} />}
                    </View>
                ))}
            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredData}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                renderItem={renderItem}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemSeparator: {
        height: 1,
        backgroundColor: '#ddd'
    }
});