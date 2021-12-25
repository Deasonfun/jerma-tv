import React from 'react';

const VideoModal = (props) => {
    let playingVideo = props.playingVideo;
    let setShowing = props.setShowing;
    let videoID = playingVideo.snippet.resourceId.videoId;
    return <div className='modal-background'>
        <div className='modal-container'>
            <div className='modal-close-container'>
                <button className='modal-close-button' onClick={() => setShowing(false)}>X</button>
            </div>
            <div className='modal-body-container'>
                <div className='modal-video-container'>
                    <iframe className='modal-video' 
                    src={`https://www.youtube.com/embed/${videoID}`} 
                    frameBorder='0' 
                    allow='accelerometer; 
                    autoplay; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture' 
                    allowFullScreen></iframe>
                    <h2 className='modal-info'>{playingVideo.snippet.title}</h2>
                    <h3 className='modal-info'>Released: {playingVideo.snippet.publishedAt.slice(0,10)}</h3>
                    <p className='modal-info'>{playingVideo.snippet.description}</p>
                </div>
            </div> 
        </div>
    </div>
}

export default VideoModal;