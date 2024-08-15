import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import {COLORS, FONTS, SIZES} from "../styles/constants";
import {useAuth} from "../context/AuthContext";

const LoginScreen = ({ navigation }: any) => {
    const { login } = useAuth();

    const handleGuestLogin = () => {
        login(); // Update login state
        setTimeout(() => navigation.navigate('App'), 100); //navigate after delay to be sure that the state has been changed
    };

    const openTerms = () => {
        Linking.openURL('');
    };

    const openPrivacyPolicy = () => {
        Linking.openURL('');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.iconLogo}
                source={require('../assets/logo.png')} //TODO change to svg
            />
            <Image
                style={styles.iconApp}
                source={require('../assets/app-icon.png')} //TODO change to svg
            />
            <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>
                    Welcome to the best {'\n'}YouTube-based learning application.
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleGuestLogin}>
                <Text style={styles.buttonText}>Log in as guest</Text>
            </TouchableOpacity>
            <View style={styles.policyView}>
                <Text style={styles.policyText}>
                    By continuing you agree with{'\n'}
                    <Text style={styles.link} onPress={openTerms}>
                       Terms and Conditions
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={openPrivacyPolicy}>
                        Privacy Policy
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    iconLogo: {
        width: 292,
        height: 116,
        position: 'absolute',
        top: 80,
        left: 49,
    },
    iconApp: {
        width: 128,
        height: 128,
        position: 'absolute',
        top: 328,
        left: 132,
    },
    welcomeView: {
        width: SIZES.width,
        height: 72,
        position: 'absolute',
        top: 589,
        left: 32,
    },
    welcomeText: {
        fontFamily: FONTS.fonts,
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 24,
        letterSpacing: 1,
        color: COLORS.white,
    },
    button: {
        backgroundColor: COLORS.secondary,
        width: SIZES.width,
        height: 48,
        position: 'absolute',
        top: 693,
        left: 32,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: FONTS.fonts,
        color: COLORS.white,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 1,
        fontWeight: '600',
        textAlign: 'center',
    },
    policyView: {
        width: 264,
        height: 32,
        position: 'absolute',
        top: 765,
        left: 64,
    },
    policyText: {
        color: COLORS.white,
        fontFamily: FONTS.fonts,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        textAlign: 'center',
    },
    link: {
        textDecorationLine: 'underline',
        color: COLORS.link,
    },
});

export default LoginScreen;
