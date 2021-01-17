import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// LOGIN
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';

// CREATE USER
import SignUp from '../screens/SignUp';
import SignUpPhoto from '../screens/SignUpPhoto';

// BOTTOM MENU
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown:false,
        }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>

        <Stack.Screen name="SignUp" component={SignUp}/>  
        <Stack.Screen name="SignUpPhoto" component={SignUpPhoto}/>   

        <Stack.Screen name="MainTab" component={MainTab}/>     
    </Stack.Navigator>
);