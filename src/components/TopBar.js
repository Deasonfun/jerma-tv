import React from 'react';
import JermaLogo from '../jerma-logo-shadow.webp';

const ChooseRandomVideo = (videos, setShowing, setPlayingVideo) => {
    const randomNum = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomNum];
    setPlayingVideo(randomVideo);
    setShowing(true)
}

const TopBar = (props) => {
    let setShowing = props.setShowing;
    let setPlayingVideo = props.setPlayingVideo;
    let videos = props.videos;
    let setSearch = props.setSearch;
    return <div className="top-bar">
        <img className="top-bar-logo" src={JermaLogo} alt="logo"/>
        <button onClick={() => ChooseRandomVideo(videos, setShowing, setPlayingVideo)} className="random-button">Random</button>
        <input className="search-bar" type="text" placeholder="Search..." onChange={(event) => setSearch(event.target.value)}/>
    </div>
}

export default TopBar;