// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddUser from '../../screens/AddUserScreen/AddUser';
import UserScreen from '../../screens/UserScreen/UserScreen';
import UsrDetails from '../../screens/UserDetails/UsrDetails';



const Stack = createNativeStackNavigator();

 export default function StackNab() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="UserDetails" component={UsrDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

