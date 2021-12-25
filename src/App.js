import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import VideoThumb from './components/VideoThumb';
import VideoModal from './components/VideoModal';
import TopBar from './components/TopBar';

function App() {
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState([]);
  const [showing, setShowing] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/videos').then((response) => {
      console.log(response.data);
      setVideos(response.data.items);
    })
  }, [])

  
  return (
    <div className='App'>
      {showing && <VideoModal setShowing={setShowing} playingVideo={playingVideo} />}
      <TopBar setSearch={setSearch} videos={videos} setShowing={setShowing} setPlayingVideo={setPlayingVideo}/>
      <div className='dashboard-container'>
        <div className='dashboard-videos-container'>
          {videos.filter((val) => {
            if (search === '') {
              return val;
            } else if (val.snippet.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((video) => {
            return <div key={video.id} className='video-container'>
              <VideoThumb video={video} setShowing={setShowing} setPlayingVideo={setPlayingVideo}/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}  
export default App;