import React, { useEffect, useState } from 'react';
import './App.css';
import { global } from './components/globalStyle';
import BeerCard from './components/BeerCard';
import Search from './components/Search';

import ClipLoader from 'react-spinners/ClipLoader';

const styles = {
  content: {
    display: 'flex',
    margin: '10px',
    backgroundColor: '#ffff',
    padding: '10px',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '0px',

  },
  title: {
    color: '#ac3f21',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    padding: 20,
    fontSize: 52,
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
  imgContainer: {
    img: { height: 300, width: 'auto' },
    display: 'flex',
    justifyContent: 'center',
  },
};

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSelect = (event) => {
    setState(event.target.value);
  };

  if (isLoading) {
    <div className='full-page-loader'>
      <ClipLoader sizeUnit={'px'} size={150} color={'#fc1303'} loading={true} />
    </div>;
  }

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
      <div style={styles.imgContainer}>
        <img src='/beerImg.png' alt='Beer' style={styles.imgContainer.img}/>
      </div>
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
