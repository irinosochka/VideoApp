import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';
import PlayIcon from '../../assets/icons/play-icon.svg';
import PauseIcon from '../../assets/icons/pause-icon.svg';
import ForwardIcon from '../../assets/icons/forward-icon.svg';
import BackwardIcon from '../../assets/icons/backward-icon.svg';
import VolumeIcon from '../../assets/icons/volume-icon.svg';
import MuteVolumeIcon from '../../assets/icons/mute-volume-icon.svg';
import BackIcon from '../../assets/icons/leftarrow-icon.svg';
import FullScreenIcon from '../../assets/icons/fullscreen-icon.svg';
import AirplayIcon from '../../assets/icons/airplay-icon.svg';
import moment from "moment";
import { COLORS } from "../styles/constants";
import {useNavigation} from "@react-navigation/native";

const VideoPlayer = ({ source }) => {
    const videoRef = useRef<any>(null);
    const navigation = useNavigation();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [muted, setMuted] = useState<boolean>(false);

    const formatTime = (timeInSeconds: number): string => {
        const duration = moment.duration(timeInSeconds, 'seconds');
        if (duration.hours() > 0) {
            return moment.utc(duration.asMilliseconds()).format("HH:mm:ss");
        }
        return moment.utc(duration.asMilliseconds()).format("mm:ss");
    };

    const onPlayPausePress = () => {
        setIsPlaying(!isPlaying);
    };

    const onForwardPress = () => {
        videoRef.current.seek(currentTime + 10);
    };

    const onBackwardPress = () => {
        videoRef.current.seek(currentTime - 10);
    };

    const onMutePress = () => {
        setMuted(!muted);
    };

    const onBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Video
                source={source}
                ref={videoRef}
                style={styles.video}
                paused={!isPlaying}
                onProgress={({ currentTime }) => setCurrentTime(currentTime)}
                onLoad={({ duration }) => setDuration(duration)}
                muted={muted}
                controls={false}
                resizeMode="contain"
            />

            <View style={styles.controlsContainer}>
                <TouchableOpacity onPress={onBackwardPress} style={styles.controlButton}>
                    <View style={styles.circle}>
                        <BackwardIcon width={20} height={20} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPlayPausePress} style={styles.controlButton}>
                    <View style={styles.circle}>
                        {isPlaying ? (
                            <PauseIcon width={20} height={20} />
                        ) : (
                            <PlayIcon width={20} height={20} />
                        )}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onForwardPress} style={styles.controlButton}>
                    <View style={styles.circle}>
                        <ForwardIcon width={20} height={20} />
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onMutePress} style={styles.volumeButton}>
                <View style={styles.circle}>
                    {muted ? (
                        <VolumeIcon width={20} height={20} />
                    ) : (
                        <MuteVolumeIcon width={20} height={20} />
                    )}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.airplayButton}>
                <View style={styles.circle}>
                    <AirplayIcon width={20} height={20} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <View style={styles.circle}>
                    <BackIcon width={20} height={20} />
                </View>
            </TouchableOpacity>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}> {formatTime(currentTime)} / {formatTime(duration)}</Text>
            </View>
            <TouchableOpacity style={styles.fullScreenButton}>
                <FullScreenIcon width={20} height={20} />
            </TouchableOpacity>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}> {formatTime(currentTime)} / {formatTime(duration)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: 250,
    },
    controlsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        height: '100%',
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    volumeButton: {
        position: 'absolute',
        right: 60,
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenButton: {
        position: 'absolute',
        right: 20,
        bottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    airplayButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeContainer: {
        position: 'absolute',
        bottom: 25,
        left: 20,
    },
    timeText: {
        color: COLORS.white,
        fontSize: 10,
    },
});

export default VideoPlayer;
