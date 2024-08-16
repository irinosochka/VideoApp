import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { COLORS, FormStyles } from '../styles/constants';

const VideoDetailScreen = () => {

    return (
        <SafeAreaView style={FormStyles.SafeArea}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.description}>Description</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    description: {
        fontSize: 14,
        color: COLORS.secondary,
    },
});

export default VideoDetailScreen;
