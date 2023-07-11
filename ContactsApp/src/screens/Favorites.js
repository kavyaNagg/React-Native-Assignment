import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import Item from './Item';

const ICON_SIZE = 25;

var db = openDatabase({name: 'UserDatabase.db'});

const Favorites = ({navigation}) => {
  let [inputUserName, setInputUserName] = useState('');
  let [flatListItems, setFlatListItems] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * INTO favorites FROM table_user where user_name = ?',
        [route.param.data.user_name],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));

          setFavorite(temp);
          setFlatListItems(temp);
        },
      );
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text style={{color: '#000'}}>Favorites</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <FlatList
            data={favorite}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <Item item={item} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
