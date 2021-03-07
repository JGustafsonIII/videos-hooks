import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('React Tutorial by By Brad Traversy');
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
