import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Animes from './pages/animes';
import Mangas from './pages/mangas';
import './config/statusBarConfig'

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator 
      tabBarOptions={
          {activeTintColor: '#0E80FF',
          style: {
            backgroundColor: '#000000',
            paddingBottom:8,
            paddingTop:8,
            height:56
          }
          }}
      >
        <BottomTab.Screen name="Animes" component={Animes} />
        <BottomTab.Screen name="Mangas" component={Mangas} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}