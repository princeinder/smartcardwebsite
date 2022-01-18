import React from "react";
import CustomLink from "./CustomLink";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomImage from "./CustomImage";
import { Box, Container, Button } from "@mui/material";

const Navbar = () => {

  return (
    <Container disableGutters maxWidth="lg" component="header">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' ,alignItems:'center' ,pt:2 }}>
        <Box>
          <CustomImage src="/images/logo.svg" alt="logo.svg" className="logo" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
          <CustomLink
            href="#"
            as="#"
          >
            <Typography sx={{ pr: 2 }} variant="h6">About</Typography>
          </CustomLink>
          <CustomLink
            href="#"
            as="#"
          >
            <Typography sx={{ pr: 2 }} variant="h6">Contact</Typography>
          </CustomLink>
          <CustomLink
            href="#"
            as="#"
          >
            <Button
              color="primary"
              fullWidth
              size="large"
              variant="contained"
            >
              Buy
            </Button>
          </CustomLink>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Navbar;
