import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import {COLORS, SIZES} from "../styles/constants";
import {useAuth} from "../context/AuthContext";
import LogoIcon from "../assets/logo.svg";
import AppIcon from "../assets/app-icon.svg"

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
            <View style={styles.iconLogo}>
                <LogoIcon width={292} height={128}/>
            </View>
            <View style={styles.iconApp}>
                <AppIcon width={128} height={128}/>
            </View>
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
        position: 'absolute',
        top: 80,
        left: 49,
    },
    iconApp: {
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
