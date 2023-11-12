import React, { useEffect } from "react";
import { StyleSheet, View, Text } from 'react-native'
import ETAListCell from "./ETAListCell";
import { FlatList } from "react-native-gesture-handler";

const ETAListView = ({ busData, busStopName }) => {
    const renderItem = ({ item }) => {
        const currentTimestamp = new Date();
        const staTimestamp = new Date(item.eta);
        const timeDifference = staTimestamp - currentTimestamp;

        var minutesDifference
        if(item.eta == null){
          minutesDifference = null
        } else {
          minutesDifference = Math.floor(timeDifference / (1000 * 60))
          if(minutesDifference <= 0){
              minutesDifference = "-"
          }
        }
        return (
            <View>
                <ETAListCell minutes={minutesDifference} remark={item.rmk_tc} />
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleLabel}>{busStopName}</Text>
            </View>
            <View style={styles.cellContainer}>
                <FlatList
                    data={busData.data}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    titleContainer: {
        paddingLeft: 20,
        paddingTop: 20
    },
    titleLabel: {
        fontSize: 24,
        color: '#444444'
    },
    cellContainer: {
        paddingLeft: 20,
        paddingTop: 10
    }
})

export default ETAListView