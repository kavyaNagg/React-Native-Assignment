import React, {useEffect, useState} from 'react';
import {Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import {useRoute} from '@react-navigation/native';
import Favorites from './Favorites';

var db = openDatabase({name: 'UserDatabase.db'});

const ViewContact = ({navigation}) => {
  let [inputUserName, setInputUserName] = useState('');
  let [userData, setUserData] = useState({});

  const route = useRoute();

  let searchUser = () => {
    console.log(inputUserName);
    setUserData({});
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_name = ?',
        [inputUserName],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <TouchableOpacity
          style={{
            width: '35%',
            height: 40,
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: '#fff',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: -15,
            alignItems: 'center',
            backgroundColor: '#f05555',
            marginTop: 20,
            marginLeft: 120,
            marginRight: 120,
          }}
          onPress={() => {
            navigation.navigate('Favorites');
            console.log('favorites');
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Add to favorites
          </Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/user.png')}
          style={{
            width: 80,
            height: 80,
            marginTop: 40,
            alignSelf: 'center',
          }}
        />

        <View style={{flex: 1}}>
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
            }}>
            <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20}}>
              {route.params.data.user_name}
            </Text>
            <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20}}>
              Contact No. {route.params.data.user_contact}
            </Text>
            <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20}}>
              Address: {route.params.data.user_address}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewContact;
