import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
    const handleGuestLogin = () => {
        navigation.replace('App'); // Navigate to the main app after logging in as a guest
    };

    const openPrivacyPolicy = () => {
        Linking.openURL('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to the best YouTube-based learning application.</Text>
            <Button title="Log in as guest" onPress={handleGuestLogin} />
            <Text style={styles.policyText} onPress={openPrivacyPolicy}>
                By continuing you agree with
                Terms and Conditions and Privacy Policy
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 22,
        marginBottom: 20,
    },
    policyText: {
        fontSize: 13,
        marginBottom: 20,
    },
});

export default LoginScreen;
