import { Box, Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import image from "./smile.png"
import axios from 'axios'

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#74b9ff"
    }
}))

// export const rendertext = ({ label,varnt,comp,color,align }) => ( <Typography 
// variant={varnt? varnt :"body1"}
// component={comp? comp :"h6"}
// color={color? color :"primary"}
// align={align? align :"center"}

// >{label}</Typography>
// );

export default function JaokeGenretor() {
    const URL = " https://official-joke-api.appspot.com/jokes/random";
    const classes = useStyle();
    const [joke, setjoke] = useState({});

    const generateJoke = () => {
        axios.get(URL).then(({data}) => {
            setjoke(data)
            console.log("data", data)
        });
    }
    return (
        <Grid container className={classes.root}>
            <Grid item xs={10} sm={7} lg={6}>
                <Paper component={Box} p={2}>
                    <Box align="center" mb={4} mt={3}>
                        <img src={image} alt={"Emoji"} />
                    </Box>

                    <Typography variant="h4" component="h6" align="center" color="textPrimary">React JokeGenerator</Typography>
                    {joke.setup ? <Box align="center">
                        <Typography variant="body1" component="h6" color="primary">{joke.setup}</Typography>
                        <Typography variant="body1" component="h6" color="textSecondary">{joke.punchline}</Typography>
                    </Box> : <Box align="center">
                        <Typography variant="body1" component="h6" color="error">Please click the button to get joke</Typography>
                        
                    </Box>}
                    <Box align="center" mb="4" marginTop={3}>
                        <Button variant="contained" color="primary" size="medium" onClick={generateJoke}>Generate Joke</Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}
