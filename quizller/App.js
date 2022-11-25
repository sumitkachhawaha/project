import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';

import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';


export default function App() {
  return (
    
     <NavigationContainer>
      <MyStack/>
     </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  
   
});
