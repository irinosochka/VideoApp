import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-screens';
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";
import {AuthProvider, useAuth} from "./src/context/AuthContext";
import {COLORS} from "./src/styles/constants";
import HomeIcon from './assets/icons/home-icon.svg';
import SearchIcon from './assets/icons/search-icon.svg';
import SearchScreen from "./src/screens/SearchScreen";
import VideoDetailScreen from "./src/screens/VideoDetailScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

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
        <HomeStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </HomeStack.Navigator>
);

// Stack Navigator for Search
const SearchStack = createNativeStackNavigator();
const SearchStackScreen = () => (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
        <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
        <SearchStack.Screen name="VideoDetailSearch" component={VideoDetailScreen} />
        {/*<SearchStack.Screen name="SearchScreen" component={SearchScreen} />*/}
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
                    return <IconComponent width={size} height={size} style={{color:color}}/>;
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
