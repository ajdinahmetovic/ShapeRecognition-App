import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main} from '../views/main';

// Common options
const defaultScreenOptions = {
  headerShown: false,
};

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={defaultScreenOptions}
      initialRouteName="Main">
      <Stack.Screen name="MainView" component={Main} />
    </Stack.Navigator>
  );
}
