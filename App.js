import * as React from 'react';
import {  StyleSheet, View,  } from 'react-native';
import { Provider } from 'react-redux'
import store from './store/store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Form from './components/Form';
import EmployeesInformation from './components/EmployeesInformation';
import EmployeeDetails from './components/EmployeeDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Employee = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EmployeesInformation" component={EmployeesInformation}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="EmployeeDetails" component={EmployeeDetails}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>

  )
}

export default function App(props) {
  return (
    <Provider store={store} >
      <View style={styles.container}>


        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Form" component={Form} />
            <Tab.Screen name="Employee Info" component={Employee}
              options={{
                tabBarVisible: false
              }}
            />
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
