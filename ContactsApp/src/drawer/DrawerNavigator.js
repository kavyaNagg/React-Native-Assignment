import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ViewAllContacts from '../screens/ViewAllContacts';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <View>
    //   <Text style={{color: '#000'}}>Drawer Navigator</Text>
    // </View>
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef', //Set Drawer background
          width: 250, //Set Drawer width
        },
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Drawer.Screen
        name="ViewAll"
        component={ViewAllContacts}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
