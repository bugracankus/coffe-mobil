import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import HomePage from '../screens/HomePage';
import ProductPage from '../screens/ProductPage';

// ---- SCREENS ---- // 


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='ProductPage'
            screenOptions={{
                headerShown: false
            }}
        >
              <Stack.Screen
                name="HomePage"
                component={HomePage}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
              <Stack.Screen
                name="ProductPage"
                component={ProductPage}
            />
          
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}