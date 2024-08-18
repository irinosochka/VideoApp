import { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyBXZytoZXsm7N5wQ9PO8OvohgnwWD9S2gY';

export interface Video {
    id: string;
    channelName: string;
    title: string;
    link: string;
    date: string;
}

const useFetchVideos = (query: string) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`
                );
                const data = await response.json();

                // console.log('API Response:', data);

                const videos = data.items.map((item: any) => ({
                    id: item.id.videoId,
                    channelName: item.snippet.channelTitle,
                    title: item.snippet.title,
                    link: item.snippet.thumbnails.high.url,
                    date: item.snippet.publishedAt,
                }));

                setVideos(videos);
            } catch (error) {
                setError(error as Error);
                console.error('Error fetching videos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [query]);

    return { videos, loading, error };
};

export default useFetchVideos;
