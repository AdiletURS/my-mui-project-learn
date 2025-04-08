import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";
import {Card, Container, Grid, Typography, CardMedia, CardContent, CardActions, Toolbar} from "@mui/material";
import Button from "@mui/material/Button";
import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import CardGird from "./components/Card/CardGird.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {

    return (
        <>
            <NavBar/>
            <Toolbar/>
            <Header/>
            <CardGird/>
            <Footer/>
        </>
    );
}

export default App;



