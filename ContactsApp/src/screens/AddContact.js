import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const AddContact = ({navigation}) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      Alert.alert('Please fill name');
      return;
    }
    if (!userContact) {
      Alert.alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      Alert.alert('Please fill Address');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else Alert.alert('Registration Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 60,
                  alignSelf: 'center',
                }}
              />
              <MyTextInput
                placeholder="Enter Name"
                placeholderTextColor={'#fff'}
                onChangeText={userName => setUserName(userName)}
                style={{padding: 10, color: '#fff'}}
              />
              <MyTextInput
                placeholder="Enter Contact No"
                onChangeText={userContact => setUserContact(userContact)}
                maxLength={10}
                keyboardType="numeric"
                style={{padding: 10, color: '#fff'}}
              />
              <MyTextInput
                placeholder="Enter Address"
                onChangeText={userAddress => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10, color: '#fff'}}
              />
              <MyButton title="Submit" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: '#fff',
    alignSelf: 'center',
    paddingLeft: 15,
    marginTop: 50,
    padding: 10,
    color: '#000',
  },
});

export default AddContact;
