import React from 'react';
import {View, Text} from 'react-native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import HomeScreen from '../screens/HomeScreen';
import AddItems from '../screens/AddItems';

const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddItems"
          component={AddItems}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
