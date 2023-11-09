import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import ETAListCell from "./ETAListCell";

const ETAListView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleLabel}>荃景圍天橋</Text>
            </View>
            <View style={styles.cellContainer}>
                <ETAListCell minutes={2} />
                <ETAListCell minutes={23} />
                <ETAListCell minutes={24} />
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
    titleLabel:{
        fontSize: 26,
        color: '#444444'
    },
    cellContainer:{
        paddingLeft: 20,
        paddingTop: 10
    }
})

export default ETAListView