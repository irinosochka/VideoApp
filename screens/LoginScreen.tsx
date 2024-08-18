import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from "../styles/constants";
import {useAuth} from "../context/AuthContext";
import LogoIcon from "../assets/logo.svg";
import AppIcon from "../assets/app-icon.svg";
import TermsOfServiceModal from "../components/TermsOfServiceModal";

const LoginScreen = ({ navigation }: any) => {
    const [showTerms, setShowTerms] = useState(false);
    const { login } = useAuth();

    const handleGuestLogin = () => {
        login(); // Update login state
        setTimeout(() => navigation.navigate('App'), 100); //navigate after delay to be sure that the state has been changed
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <LogoIcon width={292} height={128}/>
            </View>
            <View style={styles.appIconContainer}>
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
            <View style={styles.policyContainer}>
                <Text style={styles.policyText}>
                    By continuing you agree with{'\n'}
                    <Text style={styles.link} onPress={() => setShowTerms(true)}>
                        Terms and Conditions
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={() => setShowTerms(true)}>
                        Privacy Policy
                    </Text>
                </Text>
            </View>
            <TermsOfServiceModal visible={showTerms} onClose={() => setShowTerms(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingTop: 60,
    },
    iconContainer: {
        marginBottom: 110,
    },
    appIconContainer: {
        marginBottom: 100,
    },
    welcomeView: {
        marginBottom: 40,
        width: '100%',
    },
    welcomeText: {
        fontWeight: '600',
        fontSize: 22,
        marginVertical: 6,
        letterSpacing: 1,
        color: COLORS.white,
        textAlign: 'left',
    },
    button: {
        backgroundColor: COLORS.secondary,
        width: '100%',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        letterSpacing: 1,
        fontWeight: '600',
        textAlign: 'center',
    },
    policyContainer: {
        alignItems: 'center',
    },
    policyText: {
        color: COLORS.white,
        fontWeight: '400',
        fontSize: 13,
        marginVertical: 6,
        textAlign: 'center',
    },
    link: {
        textDecorationLine: 'underline',
        color: COLORS.link,
    },
});

export default LoginScreen;
