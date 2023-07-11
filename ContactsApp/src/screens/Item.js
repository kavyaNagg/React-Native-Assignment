import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import Swipeout from 'react-native-swipeout';

const Item = ({item}) => {
  const [star, setStar] = useState(2);
  const starImgFilled =
    'C:/Users/kavyakalyan/Desktop/Assignment/ContactsApp/src/assets/star.png';
  const startImgEmpty =
    'C:/Users/kavyakalyan/Desktop/Assignment/ContactsApp/src/assets/favorite.png';

  const navigation = useNavigation();
  const swipeRef = useRef(null);
  const closeSwipeout = () => {
    swipeRef.current.close();
  };

  let swipeBtns = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => {
        navigation.navigate('Delete', {data: item});
      },
    },
    {
      text: 'Edit',
      backgroundColor: 'green',
      onPress: () => {
        navigation.navigate('Update', {data: item});
      },
    },
  ];

  return (
    <>
      <ScrollView>
        <Swipeout right={swipeBtns} ref={swipeRef}>
          <View
            key={item.user_id}
            style={{
              flex: 1,
              backgroundColor: 'white',
              padding: 20,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 70,
                alignSelf: 'center',
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: '#000',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: -15,
                alignItems: 'center',
                backgroundColor: '#000',
                shadowOpacity: 1,
                shadowOffset: {
                  width: 0,
                  height: 10,
                  color: '#000',
                },
                elevation: 10,
              }}
              onPress={() => {
                navigation.navigate('View', {data: item});
                console.log(item.user_name);
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/user.png')}
                  style={{width: 40, height: 40, marginLeft: 10}}
                />
                <View>
                  <Text style={{color: '#fff', marginLeft: 20, marginTop: 3}}>
                    {item.user_name}
                  </Text>
                  <Text style={{color: '#fff', marginLeft: 20, marginTop: 2}}>
                    {item.user_contact}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setStar(item)}>
                  <Image
                    source={
                      item <= star ? {uri: starImgFilled} : {uri: startImgEmpty}
                    }
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: '#fff',
                      marginRight: 10,
                    }}></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Favorites');
                    console.log('favorites');
                  }}>
                  <Image
                    source={require('../assets/favorite.png')}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: '#fff',
                      marginRight: 10,
                    }}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/call.png')}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: '#fff',
                      marginRight: 10,
                    }}></Image>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </Swipeout>
      </ScrollView>
    </>
  );
};

export default Item;
