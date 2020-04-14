import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import Maps from './Maps'
// import From from './components/Form'
import { Provider} from 'react-redux'
import store from './store/store'
// import {createMaterialTopTabNavigator} from  '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Form from './components/Form';
import EmployeesInformation from './components/EmployeesInformation';
import { NavigationContainer } from '@react-navigation/native';

// const Tab=createMaterialTopTabNavigator()
const Tab=createBottomTabNavigator()

export default function App(props) {
    return (
      <Provider store={store} >
      <View style={styles.container}>
        {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer> */}
             {/* <Maps/> */}
        {/* <Form/> */}
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Form" component={Form} />
          <Tab.Screen name="EmployeesInformation" component={EmployeesInformation}/>
        </Tab.Navigator>
        </NavigationContainer>
      </View>
      </Provider>
    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
