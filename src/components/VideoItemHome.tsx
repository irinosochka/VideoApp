import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {COLORS} from "../styles/constants";
import moment from "moment";

interface VideoItemHomeProps {
    title: string;
    link: string;
    date: string;
}

const formatDate = (dateString: string) => {
    return moment(dateString).format('DD.MM.YYYY');
};

const VideoItemHome: React.FC<VideoItemHomeProps> = ({ title, link, date }) => {
    return (
        <View style={styles.item}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: link }} style={styles.video} />
            </View>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
            <Text style={styles.date}>{formatDate(date)}</Text>
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
        color: COLORS.secondary,
        fontSize: 12,
        fontWeight: '500',
        marginVertical: 5,
        letterSpacing: 0.1,
    },
    date: {
        fontSize: 10,
        fontWeight: '400',
        marginVertical: 5,
        color: COLORS.secondary,
        textAlign: 'right',
    },
});

export default VideoItemHome;
