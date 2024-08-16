import React from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import CategorySection from "../components/CategorySection";
import {COLORS} from "../styles/constants";


const MainScreen = ({ navigation }: any) => {

    const videos = [
        {
            id: '1',
            title: 'React Native in 100 seconds',
            link: 'https://fakeimg.pl/180x112?text=VIDEO',
            date: '01.01.2024',
        },
        {
            id: '2',
            title: 'Introduction to React',
            link: 'https://fakeimg.pl/180x112?text=VIDEO',
            date: '02.01.2024',
        },
        {
            id: '3',
            title: 'Introduction',
            link: 'https://fakeimg.pl/180x112?text=VIDEO',
            date: '03.01.2024',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search videos"
                    placeholderTextColor="#2B2D4299"
                />
            </View>
            <ScrollView>
                <CategorySection
                    categoryName="React Native"
                    videos={videos}
                />
                <CategorySection
                    categoryName="React"
                    videos={videos}
                />
                <CategorySection
                    categoryName="Typescript"
                    videos={videos}
                />
                <CategorySection
                    categoryName="Javascript"
                    videos={videos}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        borderColor: COLORS.secondary,
        borderWidth: 2,
        borderRadius: 16,
        margin: 16,
        paddingHorizontal: 16,
    },
    textInput: {
        fontSize: 16,
        letterSpacing: 0.5,
        color: COLORS.secondary,
    },
});

export default MainScreen;
