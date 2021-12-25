import React from 'react';

const VideoThumb = (props) => {

    let video = props.video; 

    const handleClick = () => {
        props.setShowing(true);
        props.setPlayingVideo(video);
    }

    return <div onClick={() => handleClick()} >
        <img className='thumb' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        <h3 className='title'>{video.snippet.title}</h3>
    </div>
}

export default VideoThumb;