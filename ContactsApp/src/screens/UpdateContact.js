import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  Image,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import {openDatabase} from 'react-native-sqlite-storage';
import {useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

var db = openDatabase({name: 'UserDatabase.db'});

const UpdateContact = ({navigation}) => {
  const [filePath, setFilePath] = useState({});
  const route = useRoute();
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    setUserName(route.params.data.user_name);
    setUserContact(route.params.data.user_contact);
    setUserAddress(route.params.data.user_address);
  }, []);

  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);
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

    db.transaction(tx => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, route.params.data.user_id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else Alert.alert('Updation Failed');
        },
      );
    });
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: ' App needs camera permission',
          },
        );
        //If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: ' App needs write permission',
          },
        );
        //If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        Alert.alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captueImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeighst: 550,
      quality: 1,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Reponse = ', response);

        if (response.didCancel) {
          Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          Alert.alert(response.errorMessage);
          return;
        }
        setFilePath(response);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeighst: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      setFilePath(response);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => chooseFile('photo')}>
            <Image
              source={require('../assets/user.png')}
              style={{
                width: 80,
                height: 80,
                marginTop: 60,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => captueImage('photo')}>
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
              }}>
              Add Picture
            </Text>
          </TouchableOpacity>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
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
              <MyButton
                title="Update User"
                customClick={updateUser}
                onPress={() => {
                  navigation.navigate('ViewAll');
                }}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateContact;
