import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
//import persistReducer from 'redux-persist/es/persistReducer';
//import AsyncStorage from '@react-native-community/async-stoage';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

let persistConfig = {
  key: 'root',
  storage,
  version: 1,
  //storage: AsyncStorage,
};
let rootReducer = combineReducers({
  tasks: taskReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  // reducer: {
  //   tasks: taskReducer,
  // },
  reducer: persistedReducer,
});
