import {Platform, StatusBar, StyleSheet} from 'react-native';

interface Colors {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    link: string;
    lightGray : string;
}

export const COLORS: Colors = {
    primary: '#8D99AE',
    secondary: '#2B2D42',
    white: '#FFFFFF',
    black: '#000000',
    link: '#2B2D42',
    lightGray: '#C8C8C8',
};

export const FormStyles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 5,
        width: '100%',
        backgroundColor: COLORS.white
    },
});
