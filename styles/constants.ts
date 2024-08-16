import { StyleSheet, Platform, StatusBar } from 'react-native';


interface Colors {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    link: string;
}

interface Sizes {
    width: number;
}

export const COLORS: Colors = {
    primary: '#8D99AE',
    secondary: '#2B2D42',
    white: '#FFFFFF',
    black: '#000000',
    link: '#2B2D42',
};

export const SIZES: Sizes = {
    width: 327,
};

export const FormStyles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
        width: '100%',
    },
});
