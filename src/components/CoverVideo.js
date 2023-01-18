import React from 'react';
import GIF from '../assets/Home Video.mp4';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  padding: 14px 0 14px 0;

  video {
    width: 100%;
    height: auto;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={GIF} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
