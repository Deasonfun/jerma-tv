import React, { useState } from 'react';

const DropDown = ({ video }) => {
    let playingVideo = `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`;

    return <div className='video-dropdown'>
      <div className='player-container'>
        <iframe className='player' src={playingVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  }

export default DropDown;