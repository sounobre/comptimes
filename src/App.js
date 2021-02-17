import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import NavBar from './components/layouts/NavBar';
import { TopStories } from './components';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const getTopArticles = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
      setTopStories(res.data.results);
      setLoading(false);
    };
    getTopArticles();
  }, []);

  const changeTopArticles = async (section) => {
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
    setTopStories(res.data.results);
    setLoading(false);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
          <Switch>
            <Route exact path="/" render={() => (
              <>
                <TopStories loading={loading} topStories={topStories} changeTopArticles={changeTopArticles}/>
              </>
            )} />
          </Switch>
        </Typography>
      </Container>
    </div>
  );
};

export default App;