import react from 'react';
import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 75,
    padding: 15,
    margin: 15,
    backgroundColor: '#f3cf7a',
    color: '#6e3b3b',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function BeerCard(props) {
  const beerLst = props.beer;
  const classes = useStyles();


  return (
    <div>
      {beerLst.map((beer) => {
        return (
          <Card key={beer.id} className={classes.root}>
            <h3 className={classes.title}>{beer.name}</h3>
            <hr />

            <p>Brewery Type: {beer.brewery_type}</p>
            <p>Ph# - {beer.phone}</p>
            <p>
              {' '}
              Address: {beer.street} {beer.city}, {beer.state} {beer.country}{' '}
            </p>
          </Card>
        );
      })}
    </div>
  );
}

export default BeerCard;
