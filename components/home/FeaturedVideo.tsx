import React from 'react';
import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import { Box } from '@mui/material';

export default props => {
  return (
    <Box sx={{margin:'0 auto', width:"80%"}}>
      <Player
        playsInline
        autoPlay={true}
        muted={true}
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </Box>
  );
};