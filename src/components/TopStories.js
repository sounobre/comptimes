import React from 'react';
import TopStory from './TopStory';
import Spinner from './layouts/Spinner';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
        marginBottom: '20px',
    },
}));

function TopStories({ loading, topStories, changeTopArticles }) {
    const classes = useStyles();

    return (
        <>
            { loading ?
                (
                    <Spinner /> 
                ) : (
                    <>
                        <div className={classes.buttons}>
                            <Button onClick={() => { changeTopArticles('technology'); }} variant="outlined" color="primary">Technology</Button>
                            <Button onClick={() => { changeTopArticles('science'); }} variant="outlined" color="primary">Science</Button>
                        </div>
                        <div className={classes.root} >
                            <Grid container spacing={3}>
                                {topStories.map((topstory) => (
                                    <Grid item xs={12} sm={4} key={topstory.url}>
                                        <TopStory topstory={topstory} />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </>
                )}
        </>
    );
}
export default TopStories;
