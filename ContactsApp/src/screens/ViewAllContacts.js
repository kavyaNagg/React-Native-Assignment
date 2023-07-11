import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import Item from './Item';

var db = openDatabase({name: 'UserDatabase.db'});

const ViewAllContacts = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFilteredDataSource(temp);
        setFlatListItems(temp);
      });
    });
  }, []);

  const searchFilterFunction = text => {
    //check if searched text is not blank
    if (text) {
      //Inserted text is not blank
      //filter the flatListItems
      //Update filteredDataSourc
      const newData = flatListItems.filter(function (item) {
        const itemData = item.user_name
          ? item.user_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      //Inserted text is blank
      //Update filteredDataSource with flatListItem
      setFilteredDataSource(flatListItems);
      setSearch(text);
    }
  };

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      {/* <View>
        <DrawerNavigator />
      </View> */}
      <View style={{padding: 2, backgroundColor: '#fff'}}>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            paddingLeft: 20,
            margin: 5,
            borderColor: '#009688',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: 20,
          }}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          placeholder="Search Here"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <FlatList
            data={filteredDataSource}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            //renderItem={({item}) => listItemView(item)}
            renderItem={({item}) => {
              return <Item item={item} />;
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{
            height: 50,
            width: 50,
            borderRadius: 10,
            backgroundColor: '#007FFF',
            right: 30,
            bottom: 50,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              tintColor: '#fff',
            }}
            source={require('../assets/add.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ViewAllContacts;
