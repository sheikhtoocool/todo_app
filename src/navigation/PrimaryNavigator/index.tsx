import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home, DetailsScreen, NewTaskScreen} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="NewTask" component={NewTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
