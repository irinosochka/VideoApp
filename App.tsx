import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-screens';
import LoginScreen from "./screens/LoginScreen";

// Stack navigator for processing the auth flow
const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
);

// Main stack navigator to switch between auth and main
const RootStack = createNativeStackNavigator();
const RootNavigator = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthNavigator} />
    </RootStack.Navigator>
);

const App = () => {
    const isLoggedIn = false;

    return (
        <NavigationContainer>
            {isLoggedIn ? <RootNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default App;
