import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import BudgetEntry from './src/screens/BudgetEntry';
import BudgetEntryList from './src/screens/BudgetEntryList';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  let persistor = persistStore(store);

  const RootApp = () => {
    return (
      <SafeAreaView>
        <BudgetEntry/>
        <BudgetEntryList/>
      </SafeAreaView>
    )
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RootApp />
      </PersistGate> 
    </Provider>
  );
}

export default App;
