import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, SafeAreaView, FlatList, Text, TouchableOpacity} from 'react-native';
import {COLORS, FormStyles} from "../styles/constants";
import SearchIcon from "../assets/icons/search-icon.svg";
import VideoItemSearch from "../components/VideoItemSearch";
import useFetchVideos from "../useFetchVideos";
import {useNavigation, useRoute} from "@react-navigation/native";

const SearchScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { query } = route.params || {};
    const [searchQuery, setSearchQuery] = useState<any>(query || '');

    const { videos, loading, error } = useFetchVideos(searchQuery);

    const handleSearchSubmit = () => {
        if (searchQuery.trim()) {
            navigation.setParams({ query: searchQuery.trim() });
        }
    };

    useEffect(() => {
        if (query) {
            setSearchQuery(query);
        }
    }, [query]);

    return (
        <SafeAreaView style={{...FormStyles.SafeArea}}>
            <View style={styles.header}>
                <SearchIcon width={24} height={24} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Search videos"
                    placeholderTextColor="#2B2D4299"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearchSubmit}
                />
            </View>
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsText}>1157 results found for: </Text>
                <TouchableOpacity>
                    <Text style={styles.searchingText}>{searchQuery}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sortedContainer}>
                <Text style={styles.sortText}>Sort by:</Text>
                <TouchableOpacity>
                    <Text style={styles.sortTextButton}> Most popular</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flatListContainer}>
                {loading ? (
                    <Text>Loading...</Text>
                ) : error ? (
                    <Text>Error loading videos</Text>
                ) : (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={videos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <VideoItemSearch
                                title={item.title}
                                link={item.link}
                                date={item.date}
                                channelName={item.channelName}
                            />
                        )}
                    />
                )}
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
