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
import SearchScreen from "./screens/SearchScreen";
import VideoDetailScreen from "./screens/VideoDetailScreen";

// Stack navigator for processing the auth flow
const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
);

// Stack Navigator for Home
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="MainScreen" component={MainScreen} />
    </HomeStack.Navigator>
);

// Stack Navigator for Search
const SearchStack = createNativeStackNavigator();
const SearchStackScreen = () => (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
        <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
        <SearchStack.Screen name="VideoDetailSearch" component={VideoDetailScreen} />
    </SearchStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <AppTabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let IconComponent;
                    const size = 32;

                    if (route.name === 'Home') {
                        IconComponent = HomeIcon;
                    } else if (route.name === 'Search') {
                        IconComponent = SearchIcon;
                    }
                    return <IconComponent width={size} height={size} color={color}/>;
                },
                tabBarActiveTintColor: COLORS.secondary,
                tabBarInactiveTintColor: COLORS.white,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    height: 80,
                    paddingVertical: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: '400',
                    letterSpacing: 0.1,
                    paddingTop: 5,
                },
            })}
        >
            <AppTabs.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
            <AppTabs.Screen name="Search" component={SearchStackScreen} options={{headerShown: false}}/>
        </AppTabs.Navigator>
    );
};

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
