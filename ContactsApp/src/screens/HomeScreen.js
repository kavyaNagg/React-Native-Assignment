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
          <MyButton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <MyButton
            title="Favorites"
            customClick={() => navigation.navigate('Favorites')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
