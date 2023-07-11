import React, {useState, useEffect} from 'react';
import {View, Alert, SafeAreaView} from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import {openDatabase} from 'react-native-sqlite-storage';
import {useRoute} from '@react-navigation/native';

const db = openDatabase({name: 'UserDatabase.db'});

const DeleteContact = ({navigation}) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  const route = useRoute();

  useEffect(() => {
    setInputUserId(route.params.data.user_id);
    setUserName(route.params.data.user_name);
    setUserContact(route.params.data.user_contact);
    setUserAddress(route.params.data.user_address);
  }, []);

  let deleteUser = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert('Please insert a valid User Id');
          }
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <MyTextInput
            placeholder="Enter Name"
            value={userName}
            style={{padding: 10, color: '#000'}}
            onChangeText={userName => setUserName(userName)}
          />
          <MyTextInput
            placeholder="Enter Contact No"
            value={'' + userContact}
            onChangeText={userContact => setUserContact(userContact)}
            maxLength={10}
            style={{padding: 10, color: '#000'}}
            keyboardType="numeric"
          />
          <MyTextInput
            value={userAddress}
            placeholder="Enter Address"
            onChangeText={userAddress => setUserAddress(userAddress)}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10, color: '#000'}}
          />
          <MyButton title="Delete User" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteContact;
