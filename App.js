import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import Maps from './Maps'

export default function App(props) {
    return (
      <View style={styles.container}>
        {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer> */}
        <Text>hii</Text>
        <Maps/>
      </View>
    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
