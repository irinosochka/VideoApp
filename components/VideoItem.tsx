import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {COLORS} from "../styles/constants";

interface VideoItemProps {
    title: string;
    link: string;
    date: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ title, link, date }) => {
    return (
        <View style={styles.item}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: link }} style={styles.video} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: 180,
        borderRadius: 16,
        overflow: 'hidden',
        marginLeft: 16,
    },
    imageContainer: {
        width: '100%',
        height: 112,
        overflow: 'hidden',
        borderRadius: 16,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.1,
    },
    date: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 24,
        color: COLORS.secondary,
        textAlign: 'right',
    },
});

export default VideoItem;
