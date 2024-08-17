import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import VideoItemHome from './VideoItemHome';
import {COLORS} from "../styles/constants";

interface Video {
    id: string;
    title: string;
    link: string;
    date: string;
}

interface CategorySectionProps {
    categoryName: string;
    videos: Video[];
    onShowMore: () => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categoryName, videos, onShowMore }) => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.categoryName}>{categoryName}</Text>
                <TouchableOpacity onPress={onShowMore}>
                    <Text style={styles.showMore}>Show more</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={videos}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <VideoItemHome
                        title={item.title}
                        link={item.link}
                        date={item.date}
                    />
                )}
            />
            <View style={styles.separator} />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 16,
    },
    categoryName: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 6,
        letterSpacing: 0.5,
        color: COLORS.secondary,
    },
    showMore: {
        fontSize: 12,
        fontWeight: '400',
        marginVertical: 6,
        letterSpacing: 0.5,
        color: COLORS.secondary,
        textDecorationLine: 'underline',
    },
    flatListContent: {
        paddingRight: 16,
    },
    separator: {
        height: 2,
        backgroundColor: COLORS.secondary,
        width: '100%',
        marginVertical: 16,
    },
});

export default CategorySection;
