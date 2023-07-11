import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import AddItems from '../screens/AddItems';
import BudgetEntry from '../screens/BudgetEntry';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="AddItems" component={AddItems} />
        <Stack.Screen name="BudgetEntry" component={BudgetEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
