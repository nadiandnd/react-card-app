import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="md">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">Memories</Typography>
                <img src={memories} className={classes.image} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify-content="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>                        
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;