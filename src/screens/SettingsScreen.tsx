import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FormStyles } from '../styles/constants';
import BackIcon from '../../assets/icons/leftarrow-icon2.svg';
import PersonIcon from "../../assets/icons/person-icon.svg";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import ClockIcon from "../../assets/icons/clock-icon.svg";

const SettingsScreen: React.FC = () => {
    const [isReminderEnabled, setIsReminderEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsReminderEnabled(previousState => !previousState);
    const navigation = useNavigation<any>()

    return (
        <SafeAreaView style={{...FormStyles.SafeArea}}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <BackIcon width={25} height={25}/>
                <Text style={styles.backButtonText}>Settings</Text>
            </TouchableOpacity>

            <View style={styles.profileContainer}>
                <View style={styles.profileIcon}>
                    <PersonIcon width={20} height={20} />
                </View>
                <Text style={styles.profileName}>John Doe</Text>
            </View>

            <View style={styles.reminderContainer}>
                <View style={styles.reminderTitle}>
                    <NotificationIcon width={32} height={32} />
                    <Text style={styles.reminderText}>Learning reminders</Text>
                </View>
                <View style={styles.reminderTimer}>
                    <Text style={styles.reminderTimeText}>Repeat everyday at:</Text>
                    <View style={styles.timeIcon}>
                        <ClockIcon width={24} height={24} />
                        <Text style={styles.reminderTimeText}>12:00</Text>
                    </View>
                    <Switch
                        trackColor={{ false: COLORS.secondary, true: COLORS.primary }}
                        thumbColor={isReminderEnabled ? COLORS.white : COLORS.white}
                        ios_backgroundColor={COLORS.secondary}
                        onValueChange={toggleSwitch}
                        value={isReminderEnabled}
                    />
                </View>
                <Text style={styles.reminderDescription}>
                    You will receive a friendly reminder to remember to study
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.1,
        color: COLORS.secondary,
        marginLeft: 12,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    profileIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        padding: 14,
        borderRadius: 100,
    },
    profileName: {
        fontSize: 14,
        marginLeft: 8,
        color: COLORS.secondary,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    reminderContainer: {
        borderTopWidth: 2,
        borderTopColor: COLORS.secondary,
        paddingTop: 8,
        paddingHorizontal: 24,
    },
    reminderTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    reminderText: {
        fontSize: 14,
        color: COLORS.secondary,
        paddingLeft: 6,
        letterSpacing: 0.1,
        fontWeight: '400',
    },
    reminderTimer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    timeIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    reminderTimeText: {
        fontSize: 12,
        color: COLORS.secondary,
        fontWeight: '400',
        marginHorizontal: 8,
    },
    reminderDescription: {
        fontSize: 10,
        color: COLORS.black,
        fontWeight: '600',
    },
});

export default SettingsScreen;
