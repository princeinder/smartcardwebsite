import React from "react";
import { Box, Typography } from "@mui/material";

const FeaturedTitle = () => (
  <Box>
  <Box sx={{ display:'flex',justifyContent:'center' ,mt:5, textAlign:'center' }}>
    <Typography
      variant="h2"
    >
      Revolutionizing Freelance Banking
    </Typography>
  </Box>
    <Box sx={{ display:'flex',justifyContent:'center' ,mt:1,mb:2, textAlign:'center' }}>
    <Typography
      variant="body2"
      gutterBottom
    >
      Revolutionizing Freelance Banking
    </Typography>
  </Box>
  </Box>
);

export default FeaturedTitle;
