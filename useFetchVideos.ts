import { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyC9tUPuX3KZPBQjqUXBl9QpaUTv26P41vw';

const useFetchVideos = (query) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`
                );
                const data = await response.json();

                const videos = data.items.slice(0, 5).map(item => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    link: item.snippet.thumbnails.high.url,
                    date: item.snippet.publishedAt,
                }));

                setVideos(videos);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [query]);

    return { videos, loading, error };
};

export default useFetchVideos;
