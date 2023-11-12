import React from "react";
import { StyleSheet, View, Text } from 'react-native'

const ETAListCell = ({ minutes, remark }) => {
    return (
        <View style={styles.container}>

            {minutes === null ? (
                <Text style={styles.nullLabel}>
                  {remark === "" ? "沒有預定班次" : remark}
                </Text>
            ) : (
                <View style={styles.container}>
                    <View style={styles.etaContainer}>
                        <View style={styles.row}>
                            <Text style={styles.minutes}>{minutes}</Text>
                            <Text style={styles.label}>分鐘</Text>
                        </View>
                    </View>
                    <View style={styles.estimatedContainer}>
                        <Text style={styles.estimate}>{remark}</Text>
                    </View>
                </View>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'baseline',
        flexDirection: 'row',
        paddingVertical: 2
    },
    etaContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    estimatedContainer: {
        flex: 3,
        alignItems: 'baseline',
        justifyContent: 'center',
        paddingLeft: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    minutes: {
        fontSize: 22,
        textAlign: 'right',
        paddingRight: 4,
        minWidth: 105,
        color: '#3a82e4'
    },
    label: {
        fontSize: 16,
        paddingLeft: 4,
        color: '#444444'
    },
    nullLabel: {
        fontSize: 20,
        paddingLeft: 4,
        color: '#3a82e4'
    },
    estimate: {
        fontSize: 22,
        paddingLeft: 2,
        textAlign: 'left',
        color: '#888888'
    },
});


export default ETAListCell