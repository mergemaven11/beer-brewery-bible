import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';

import { global } from './components/globalStyle';
import BeerCard from './components/Card';
import Search from './components/Search';

const styles = {
  content: {
    display: 'flex',
    margin:'0',
    padding: ' 0',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  title: {
    color: '#f3cf7a',
    textAlign: 'center',
    marginTop: 0,
    padding: 20,
    fontSize: 42,
    fontFamily: 'Love Ya Like A Sister, cursive',
  },
  desc: {
    textAlign: 'center',
    color: '#ffff',
    fontFamily: 'Arial, cursive',
    fontSize: 14,
  },
  disc: {
    textAlign: 'center',
    color: '#f3cf7a',
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
      <p style={styles.disc}>
        Disclosure: Some of the websites may no longer be available or
        incorrect. Data is updated and maintained through OpenBreweryDB API.
      </p>
      <p style={styles.desc}>
        {' '}
        Instructions: Select a state from the dropdown for a list of beer
        breweries!
      </p>
      <Search state={state} stateSet={handleSelect} />
      <div style={styles.content}>
        <BeerCard beer={data} />
      </div>
    </div>
  );
}

export default App;
