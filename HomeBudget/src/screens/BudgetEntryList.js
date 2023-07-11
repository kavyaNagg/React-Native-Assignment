import React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const BudgetEntryList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);

  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>{item.itemName}</Text>
        <Text style={styles.title}>{item.plannedAmount}</Text>
        <Text style={styles.title}>{item.actualAmount}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => onDelete(item.id)}>
          <Text style={{color: 'red'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text
        style={{
          color: '#fff',
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Budget Entry List
      </Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
});

export default BudgetEntryList;
