import React from 'react';
import {View, StyleSheet, TextInput, SafeAreaView, FlatList, Text, TouchableOpacity} from 'react-native';
import {COLORS, FormStyles} from "../styles/constants";
import SearchIcon from "../assets/icons/search-icon.svg";
import VideoItemSearch from "../components/VideoItemSearch";

const SearchScreen = ({ navigation }: any) => {

    const videos = [
        {
            id: '1',
            channelName: 'Channel name',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://fakeimg.pl/345x200?text=VIDEO',
            date: '01.01.2024',
        },
        {
            id: '2',
            channelName: 'Channel name',
            link: 'https://fakeimg.pl/345x200?text=VIDEO',
            date: '02.01.2024',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: '3',
            channelName: 'Channel name',
            link: 'https://fakeimg.pl/345x200?text=VIDEO',
            date: '03.01.2024',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    return (
        <SafeAreaView style={{...FormStyles.SafeArea}}>
            <View style={styles.header}>
                <SearchIcon width={24} height={24} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search videos"
                    placeholderTextColor="#2B2D4299"
                />
            </View>
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsText}>1157 results found for: </Text>
                <TouchableOpacity>
                    <Text style={styles.searchingText}>"React Native"</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sortedContainer}>
                <Text style={styles.sortText}>Sort by:</Text>
                <TouchableOpacity>
                    <Text style={styles.sortTextButton}> Most popular</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={videos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <VideoItemSearch
                            title={item.title}
                            link={item.link}
                            date={item.date}
                            channelName={item.channelName}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
        borderColor: COLORS.secondary,
        borderWidth: 2,
        borderRadius: 16,
        paddingHorizontal: 7,
        height: 44,
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
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        letterSpacing: 0.5,
        color: COLORS.secondary,
        marginLeft: 10,
    },
    flatListContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    flatListContent: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        alignItems: 'center',
    },
    sortedContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    sortText: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.secondary,
    },
    sortTextButton: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.secondary,
    },
    resultsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    resultsText: {
        fontSize: 10,
        fontWeight: '400',
        color: COLORS.secondary,
    },
    searchingText: {
        fontSize: 10,
        fontWeight: '600',
        color: COLORS.secondary,
    },
});

export default SearchScreen;