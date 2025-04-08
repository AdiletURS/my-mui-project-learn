import React from 'react';
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

const NavBar = () => {
    return (
        <div>
            <AppBar  sx={{ backgroundColor: "green", position: "fixed" }} >
                <Container  fixed>
                    <Toolbar >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }} // заменяем marginRight
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            sx={{ flexGrow: 1 }}
                            color="inherit"
                        >
                            Material UI
                        </Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined">
                                Log in
                            </Button>
                        </Box>
                        <Button color="warning" variant="contained">
                            Sign Up
                        </Button>
                    </Toolbar>

                </Container>
            </AppBar>
        </div>
    );
};

export default NavBar;