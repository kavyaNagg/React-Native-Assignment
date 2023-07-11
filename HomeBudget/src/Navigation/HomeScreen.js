import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MyButton from './components/MyButton';
import MyText from './components/MyText';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <MyText text="SQLite Example" />
          <MyButton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
          <MyButton
            title="Update"
            customClick={() => navigation.navigate('BudgetEntry')}
          />
          <MyButton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <MyButton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <MyButton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          />
        </View>
        {/* <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Example of SQLite Database in React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
