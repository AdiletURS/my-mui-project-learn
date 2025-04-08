import React from 'react';
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";

function Header(props) {
    return (
        <div>
            <main >
                <Paper
                    sx={{
                        marginTop: 8,
                        borderRadius: 0,

                        backgroundImage: "url(https://picsum.photos/2000)",

                        position: "relative",
                        color:"inherit",
                        marginBottom: 8,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        minHeight: 350,
                    }}
                >
                    <Container fixed>
                        <Grid container >
                            <Grid item md={6}>
                                <Box sx={{ position: 'relative', padding: 3, maxWidth: 600 }}>
                                    <Typography color="white" variant="h3" component="h1" gutterBottom >
                                        MUI + Vite learning
                                    </Typography>
                                    <Typography color="white" variant="h5" component="h5" gutterBottom >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem commodi, dicta dignissimos enim esse ex fugit ipsa mollitia nam nobis non perspiciatis quis sed!
                                    </Typography>
                                    <Button variant="contained" color="secondary" sx={{ textDecoration: 'none', backgroundColor: "green" }}>
                                        Learn More
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </div>
    );
}

export default Header;