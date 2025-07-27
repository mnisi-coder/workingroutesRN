// navigation/HomeStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Claim from '../screens/Home/Claim';
import Home from '../screens/Home/Home';
import Issue from '../screens/Home/Issue';
import Logger from '../screens/Home/Logger';
import Notification from '../screens/Home/Notification';

export type HomeStackParamList = {
  HomeMain: undefined;
  Claim: undefined;
  Issue: undefined;
  Logger: undefined;
  Notification: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen name="HomeMain" component={Home}  options={{ title: 'Home' }} />
      <Stack.Screen name="Claim" component={Claim} options={{ title: 'Claim' }} />
      <Stack.Screen name="Issue" component={Issue} options={{ title: 'Issue' }} />
      <Stack.Screen name="Logger" component={Logger} options={{ title: 'Logger' }} />
      <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notification' }} />
    </Stack.Navigator>
  );
}
