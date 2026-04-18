import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './components/Home';
import { ProductDetails } from './components/productDetails';
import { Payment } from './components/Payment';


function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar />

        <Home />
        {/* <ProductDetails /> */}
        {/* <Payment /> */}
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    gap: 20,
    backgroundColor: '#ffff',
  },
});

export default App;