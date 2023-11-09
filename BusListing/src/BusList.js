import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import BusListCell from './BusListCell';

const handlePress = () => {

}

const BusList = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                renderItem={({ item }) => <BusListCell itemData={{number: 40, destination: "abc", busStop:"DEG", minute:20}} onPress={handlePress}/>}
            />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemSeparator:{
        height: 1, 
        backgroundColor: '#ddd'
    }
});

export default BusList