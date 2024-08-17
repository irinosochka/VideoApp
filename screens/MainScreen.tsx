import React from 'react';
import {View, StyleSheet, TextInput, ScrollView, SafeAreaView} from 'react-native';
import CategorySection from "../components/CategorySection";
import {COLORS, FormStyles} from "../styles/constants";
import SearchIcon from "../assets/icons/search-icon.svg";
import SettingsIcon from "../assets/icons/settings-icon.svg";
import useFetchVideos from "../useFetchVideos";

const MainScreen = ({ navigation }: any) => {
    const { videos: reactNativeVideos } = useFetchVideos('React Native');
    const { videos: reactVideos } = useFetchVideos('React');
    const { videos: typescriptVideos } = useFetchVideos('Typescript');
    const { videos: javascriptVideos } = useFetchVideos('Javascript');

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
                    videos={reactNativeVideos}
                />
                <CategorySection
                    categoryName="React"
                    videos={reactVideos}
                />
                <CategorySection
                    categoryName="Typescript"
                    videos={typescriptVideos}
                />
                <CategorySection
                    categoryName="Javascript"
                    videos={javascriptVideos}
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
