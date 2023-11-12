import { AntDesign } from '@expo/vector-icons';

import React from "react";
import { StyleSheet,SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const BusListCell = ({itemData, onPress}) => {
    const {number, destination, busStopName, minute} = itemData

    return(
        <TouchableOpacity onPress={() => onPress()} activeOpacity={1}>
        <View style={styles.busListCell}>
          <View style={styles.busListLeftCell}>
          <Text style={styles.busListNumber}>{number}</Text>
          </View>
          <View style={styles.busListCenterCell}>
            <Text style={styles.busListDestination}><Text style={styles.busListDestinationLabel}>往</Text> {destination}</Text>
            <Text style={styles.busListBusStop}>{busStopName}</Text>
          </View>
          <View style={styles.busListRightCell}>
          {minute !== "!" ? (
            <>
              <Text style={styles.busListEstMins}>{minute}</Text>
              <Text style={styles.busListMinLabel}>分鍾</Text>
            </>
          ) : (<AntDesign name="exclamationcircleo" size={24} color="blue" />)}
        
          </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    busListCell:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 10,
      paddingBottom: 10,
    },
    busListLeftCell: {
      flex: 1,
      flexBasis: '10%',
      justifyContent: 'center',
      paddingLeft: 12
    },
    busListCenterCell:{
      flex: 1,
      flexBasis: '50%',
      justifyContent: 'center',
      paddingLeft: 8,
      paddingRight: 8
    },
    busListRightCell:{
      flex: 1,
      flexBasis: '10%',
      justifyContent: 'center',
      paddingRight: 12,
      alignItems: "flex-end"
    },
    busListNumber:{
      fontSize: 26,
      fontWeight: 'bold'
    },
    busListDestinationLabel:{
      fontSize: 14,
      fontWeight: 'bold',
    },
    busListDestination:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    busListBusStop:{
      fontSize: 14,
      paddingTop: 4
    },
    busListEstMins:{
      fontSize: 24,
      color: 'blue',
      textAlign: 'right'
    },
    busListMinLabel:{
      fontSize: 14,
      paddingTop: 4,
      textAlign: 'right'
    },
  });
  

export default BusListCell