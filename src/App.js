import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';

import { global } from './components/globalStyle';
import BeerCard from './components/Card';
import Search from './components/Search';

const styles = {
  content: {
    backgroundColor: 'black',
    display: 'flex',
    marginTop: 120,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    height: 700,
    padding: 10,
  },
  title: {
    color: '#f3cf7a',
    textAlign: 'center',
    marginTop: 0,
    padding: 20,
    fontSize: 42,
    fontFamily: 'Love Ya Like A Sister, cursive',
  },
};

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSelect = (event) => {
    setState(event.target.value);
  };



  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [state]);

  return (
    <div style={global}>
      <h1 style={styles.title}>Beer Brewery Bible</h1>
      <Search state={state} stateSet={handleSelect}/>
      <Grid container direction='row' justify='center' alignItems='center'>
        <BeerCard beer={data} />
      </Grid>
    </div>
  );
}

export default App;
