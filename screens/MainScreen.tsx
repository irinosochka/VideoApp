import React from 'react';
import {View, StyleSheet, TextInput, ScrollView, SafeAreaView} from 'react-native';
import CategorySection from "../components/CategorySection";
import {COLORS, FormStyles} from "../styles/constants";
import SearchIcon from "../assets/icons/search-icon.svg";
import SettingsIcon from "../assets/icons/settings-icon.svg";

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
        <SafeAreaView style={{...FormStyles.SafeArea}}>
            <View style={styles.header}>
                <View style={styles.searchBarContainer}>
                    <SearchIcon width={24} height={24} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search videos"
                        placeholderTextColor="#2B2D4299"
                    />
                </View>
                <SettingsIcon width={32} height={32}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
    },
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        borderColor: COLORS.secondary,
        borderWidth: 2,
        borderRadius: 16,
        paddingHorizontal: 7,
        marginRight: 7,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        letterSpacing: 0.5,
        color: COLORS.secondary,
        marginLeft: 10,
    },
});

export default MainScreen;
