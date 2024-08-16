import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-screens';
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import {AuthProvider, useAuth} from "./context/AuthContext";
import {COLORS} from "./styles/constants";
import HomeIcon from './assets/icons/home-icon.svg';
import SearchIcon from './assets/icons/search-icon.svg';

// Stack navigator for processing the auth flow
const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
);

// Bottom tab navigator
const AppTabs = createBottomTabNavigator();
const AppNavigator = () => (
    <AppTabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let IconComponent;

                if (route.name === 'Home') {
                    IconComponent = HomeIcon;
                } else if (route.name === 'Search') {
                    IconComponent = SearchIcon;
                }

                return <IconComponent width={size} height={size} fill={color} />;
            },

             tabBarActiveTintColor: COLORS.white,
             tabBarInactiveTintColor: COLORS.secondary,
        })}
    >
        <AppTabs.Screen name="Home" component={MainScreen} />
        <AppTabs.Screen name="Search" component={MainScreen} />
    </AppTabs.Navigator>
);


// Main stack navigator to switch between auth and main
const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
    const {isLoggedIn} = useAuth();

    return(
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                {
                    isLoggedIn ? (
                        <RootStack.Screen name="App" component={AppNavigator}/>
                    ) : (
                        <RootStack.Screen name="Auth" component={AuthNavigator}/>
                    )
                }
            </RootStack.Navigator>
        )
};

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
