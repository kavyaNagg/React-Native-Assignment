import 'react-native-gesture-handler';
import * as  React from 'react';
import type {PropsWithChildren} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AddContact from './src/screens/AddContact';
import DeleteContact from './src/screens/DeleteContact';
import UpdateContact from './src/screens/UpdateContact';
import ViewAllContacts from './src/screens/ViewAllContacts';
import ViewContact from './src/screens/ViewContact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from './src/screens/Favorites';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
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
        <Stack.Screen
          name="Register"
          component={AddContact}
          options={{
            title: 'Add Contacts',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewContact}
          options={{
            title: 'View Contact',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllContacts}
          options={{
            title: 'Contacts',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateContact}
          options={{
            title: 'Update Contact',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteContact}
          options={{
            title: 'Delete Contact',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: 'Favorites',
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

export default App;
