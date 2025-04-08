import React from 'react';

import {Card, Container, Grid, Typography, CardMedia, CardContent, CardActions} from "@mui/material";
import Button from "@mui/material/Button";
import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function CardGird(props) {
    const cards = [1,2,3,4,5,6,7,8,9]

    return (
        <div>
            <div className="mainContent">
                <Container maxWidth="sm">
                    <Typography component="h2" color="textPrimary" variant="h2" align="center" gutterBottom>Material UI</Typography>
                    <Typography component="h5" color="textPrimary" variant="h5" align="center" sx={{ mb: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae hic id inventore molestiae obcaecati qui quisquam totam ut, veniam. Culpa, exercitationem, quod. Doloremque eaque esse fugiat harum inventore modi quasi quidem reiciendis sapiente sit!</Typography>
                    <div className="mainButtons">
                        <Grid container direction="row" spacing={3} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary"> Start Now</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary"> Learn more</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container  className="cardGrid" maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>

                            <Card className="card">
                                <CardMedia className="cardMedia" image="https://picsum.photos/2000" title="image title" />
                                <CardContent className="cardContent">
                                    <Typography variant="h5" gutterBottom>Blog post</Typography>
                                    <Typography variant="h5" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, praesentium?</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                    <LayersIcon/>
                                    <PlayCircleFilledIcon/>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default CardGird;