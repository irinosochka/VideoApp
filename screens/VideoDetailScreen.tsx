import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { COLORS, FormStyles } from '../styles/constants';
import Video from "react-native-video";
import PersonIcon from "../assets/icons/person-icon.svg";
import ViewsIcon from "../assets/icons/views-icon.svg";
import LikesIcon from "../assets/icons/likes-icon.svg";

const VideoDetailScreen = () => {
    const videoRef = useRef(null);
    const background = require('../assets/video/broadchurch.mp4');

    return (
        <SafeAreaView style={FormStyles.SafeArea}>
            <View style={styles.videoContainer}>
                <Video
                    source={background}
                    ref={videoRef}
                    style={styles.backgroundVideo}
                    onBuffer={onBuffer}
                    onError={onError}
                    controls={true}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Lorem ipsum dolor sit amet, consect...</Text>
                <View style={styles.channelContainer}>
                    <View style={styles.channelIcon}>
                        <PersonIcon width={20} height={20}/>
                    </View>
                    <Text style={styles.channelName}>Channel name...</Text>
                </View>
                <Text style={styles.title}>Details</Text>
                <Text style={styles.title}>Notes</Text>
                <Text style={styles.title}>Description</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non. Vivamus ut massa finibus, consequat dui commodo, semper magna. Donec nec justo consectetur lacus facilisis tristique eget quis nulla. Cras sodales lacinia nisi, in dictum elit commodo in.</Text>
                <Text style={styles.title}>Statistics</Text>
                <View style={styles.statsInfo}>
                    <ViewsIcon width={20} height={20}/>
                    <Text style={styles.title}>51234 views</Text>
                </View>
                <View style={styles.statsInfo}>
                    <LikesIcon width={20} height={20}/>
                    <Text style={styles.title}>1234 likes</Text>
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
