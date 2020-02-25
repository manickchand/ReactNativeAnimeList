import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Animes from './pages/animes';
import Seasons from './pages/seasons';
import Search from './pages/search';
import './config/statusBarConfig'

const BottomTab = createBottomTabNavigator();

const TAB1 = "HOME";
const TAB2 = "SEASONS";
const TAB3 = "SEARCH"

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === TAB1) {
                  iconName = 'home';
                } else if (route.name === TAB2) {
                  iconName = 'th-large';
                }else if (route.name === TAB3) {
                  iconName = 'search';
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#0E80FF',
              inactiveTintColor: 'white',
              style: {
                backgroundColor: '#000000'
              } 
            }}>
        <BottomTab.Screen name={TAB1} component={Animes} />
        <BottomTab.Screen name={TAB2} component={Seasons} />
        <BottomTab.Screen name={TAB3} component={Search} />
      </BottomTab.Navigator>
    </NavigationContainer>

  );
}