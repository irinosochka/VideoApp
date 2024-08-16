import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {COLORS} from "../styles/constants";

interface VideoItemSearchProps {
    title: string;
    link: string;
    date: string;
    channelName: string;
}

const VideoItemSearch: React.FC<VideoItemSearchProps> = ({ title, link, date, channelName }) => {
    return (
        <View style={styles.item}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: link }} style={styles.video} />
            </View>
            <Text style={styles.channelName}>{channelName}</Text>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        borderRadius: 16,
        overflow: 'hidden',
        marginHorizontal: 16,
        marginVertical: 7,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        overflow: 'hidden',
        borderRadius: 16,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: COLORS.secondary,
        fontSize: 15,
        fontWeight: '400',
        letterSpacing: 0.1,
        marginHorizontal: 6,
        lineHeight: 15,
    },
    date: {
        fontSize: 10,
        fontWeight: '400',
        marginVertical: 12,
        color: COLORS.secondary,
        textAlign: 'right',
    },
    channelName: {
        color: COLORS.secondary,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.1,
        marginHorizontal: 6,
        marginVertical: 10,
    },
});

export default VideoItemSearch;
