import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/taskSlice';

export default function BudgetEntry() {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const onSubmitTask = () => {
    if (itemName.trim().length === 0) {
      console.log('empty');
      alert('You need to enter a task');
      setItemName('');
      return;
    }
    dispatch(
      addTask({
        task: itemName,
        task1: plannedAmount,
        task2: actualAmount,
      }),
    );
    setItemName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={{}}>
          <Text
            style={{
              fontSize: 30,
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              marginTop: 10,
              marginBottom: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Budget Entry
          </Text>
          <TextInput
            placeholder="Name"
            onChangeText={setItemName}
            value={itemName}
            placeholderTextColor={'#000'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: '80%',
              marginTop: 15,
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 5,
              color: '#000',
              alignSelf: 'center',
            }}
          />
          <TextInput
            placeholder="Planned Amount"
            onChangeText={setPlannedAmount}
            value={plannedAmount}
            placeholderTextColor={'#000'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: '80%',
              marginTop: 15,
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 5,
              color: '#000',
              alignSelf: 'center',
            }}
          />
          <TextInput
            placeholder="Actual Amount"
            onChangeText={setActualAmount}
            value={actualAmount}
            placeholderTextColor={'#000'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: '80%',
              marginTop: 15,
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 5,
              color: '#000',
              alignSelf: 'center',
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#009688',
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 12,
              width: '80%',
              marginTop: 15,
              alignSelf: 'center',
            }}
            onPress={onSubmitTask}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22ce99',
  },
});
