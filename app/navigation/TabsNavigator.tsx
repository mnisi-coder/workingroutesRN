import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Dashboard" component={Dashboard}  />
      <Tab.Screen name="Profile" component={Profile}   />
    </Tab.Navigator>
  );
}
