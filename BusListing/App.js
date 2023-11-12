import React, {useState,useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useGetBusStopListAPI1 } from './src/hook/getBusStopListAPI';
import BusListView from './src/screens/BusListView';
import BusDetail from './src/screens/BusDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  const [busStopList, setBusStopList] = useState([]);
  const isLoading = useGetBusStopListAPI1((data) => {
    setBusStopList(data);
  });

  useEffect(() => {
  }, [busStopList]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='預計到站時間'>
          {isLoading  || busStopList.length === 0 ? (
            <Stack.Screen name="Loading">
              {() => (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator animating={true} color="blue" />
                </View>
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen
              name="預計到站時間"
              component={BusListView}
              initialParams={{ busStopList:busStopList, ro:"123" }}
            />
          )}
          <Stack.Screen
            name="路線資料"
            component={BusDetail}
            initialParams={{ routeNumber: "!23", id: "123" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
