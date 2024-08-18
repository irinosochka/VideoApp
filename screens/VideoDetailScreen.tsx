import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { COLORS, FormStyles } from '../styles/constants';
import Video from "react-native-video";
import PersonIcon from "../assets/icons/person-icon.svg";
import ViewsIcon from "../assets/icons/views-icon.svg";
import LikesIcon from "../assets/icons/likes-icon.svg";

const VideoDetailScreen = () => {
    const videoRef = useRef(null);
    const background = require('../assets/video/broadchurch.mp4');
    const [activeTab, setActiveTab] = useState('Details');

    return (
        <SafeAreaView style={FormStyles.SafeArea}>
            <View style={styles.videoContainer}>
                {/*<Video*/}
                {/*    source={background}*/}
                {/*    ref={videoRef}*/}
                {/*    style={styles.backgroundVideo}*/}
                {/*    onBuffer={onBuffer}*/}
                {/*    onError={onError}*/}
                {/*    controls={true}*/}
                {/*/>*/}
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Lorem ipsum dolor sit amet, consect...</Text>
                <View style={styles.channelContainer}>
                    <View style={styles.channelIcon}>
                        <PersonIcon width={20} height={20} />
                    </View>
                    <Text style={styles.channelName}>Channel name</Text>
                </View>
                <View style={styles.tabsWrapper}>
                    <TouchableOpacity
                        style={styles.tabContainer}
                        onPress={() => setActiveTab('Details')}
                    >
                        <Text style={styles.tabText}>Details</Text>
                        <View style={activeTab === 'Details' ? styles.underlineActive : styles.underlineInactive} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tabContainer}
                        onPress={() => setActiveTab('Notes')}
                    >
                        <Text style={styles.tabText}>Notes</Text>
                        <View style={activeTab === 'Notes' ? styles.underlineActive : styles.underlineInactive} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitle}>Description</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non. Vivamus ut massa finibus, consequat dui commodo, semper magna. Donec nec justo consectetur lacus facilisis tristique eget quis nulla. Cras sodales lacinia nisi, in dictum elit commodo in.</Text>
                <Text style={styles.subtitle}>Statistics</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statsInfo}>
                        <ViewsIcon width={20} height={20} />
                        <Text style={styles.statsText}>5123467 views</Text>
                    </View>
                    <View style={styles.statsInfo}>
                        <LikesIcon width={20} height={20} stroke={COLORS.white} />
                        <Text style={styles.statsText}>12345 likes</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const onBuffer = () => {
    console.log('Buffering...');
};

const onError = (error: any) => {
    console.log('Error:', error);
};

const styles = StyleSheet.create({
    videoContainer: {
        width: '100%',
        height: 280,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    infoContainer: {
        padding: 16,
        backgroundColor: COLORS.white,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.secondary,
        marginBottom: 8,
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '700',
        color: COLORS.secondary,
        marginBottom: 8,
        letterSpacing: 0.1,
    },
    channelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    channelIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        padding: 16,
        borderRadius: 100,
    },
    channelName: {
        fontSize: 14,
        marginLeft: 8,
        color: COLORS.secondary,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    tabsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    tabContainer: {
        alignItems: 'center',
        paddingVertical: 8,
        flexDirection: 'column',
        position: 'relative',
        flex: 1,
    },
    tabText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.secondary,
    },
    underlineActive: {
        width: '100%',
        height: 2,
        backgroundColor: COLORS.secondary,
        marginTop: 4,
    },
    underlineInactive: {
        width: '100%',
        height: 2,
        backgroundColor: COLORS.lightGray,
        marginTop: 4,
    },
    description: {
        fontSize: 12,
        color: COLORS.secondary,
        marginBottom: 16,
        lineHeight: 12,
        letterSpacing: 0.1,
        fontWeight: '400',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    statsInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 8,
    },
    statsText: {
        fontSize: 10,
        color: COLORS.white,
        letterSpacing: 0.1,
        fontWeight: '700',
        paddingHorizontal: 12,
    },
});

export default VideoDetailScreen;
