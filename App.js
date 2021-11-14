import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux'

import TheContent from './TheContent';

import store from './redux';

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

 
export default function App() {
	return (
    <>
      <Provider store={store} >
        <NativeBaseProvider config={config} >
          <TheContent />
        </NativeBaseProvider>
      </Provider>
    </>
	);
}
