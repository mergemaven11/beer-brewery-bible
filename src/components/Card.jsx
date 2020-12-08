import react from 'react';
import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '1em',
    margin: '0.6em',
    backgroundColor: '#f3cf7a',
    color: '#6e3b3b',
  }
  
});

function BeerCard(props) {
  const beerLst = props.beer;
  const classes = useStyles();

  console.log(beerLst[0]);

  return (
    <>
      {beerLst.map((beer) => {
        return (
          <Card key={beer.id} className={classes.root}>
            <h3 className={classes.title}>{beer.name}</h3>
            <hr />

            <p>Brewery Type - {beer.brewery_type}</p>
            <p>Ph#: {beer.phone}</p>
            <p> Address: </p>
            <p> {beer.street} </p>
            <p>
              {beer.city}, {beer.state} {beer.postal_code}
            </p>
            <a href={beer.website_url} target='_blank' rel='noreferrer'>
              {' '}
              Website{' '}
            </a>
          </Card>
        );
      })}
    </>
  );
}

export default BeerCard;
