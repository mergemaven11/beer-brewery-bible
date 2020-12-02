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
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Cabin Sketch family, cursive',
  },
  pos: {
    marginBottom: 12,
  },
});

function BeerCard(props) {
  const beerLst = props.beer;
  const classes = useStyles();

  console.log(beerLst[0]);

  return (
    <div>
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
    </div>
  );
}

export default BeerCard;
