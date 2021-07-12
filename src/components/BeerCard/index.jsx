import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    padding: "20px 15px",
    margin: "0.6em",
    maxWidth: "210px",
    minWidth: "210px",
    lineHeight: "1em",
    // backgroundColor: "#f3cf7a",
    backgroundColor: "#ffffff",
    color: "#858080",
    fontFamily: "museo 100",
    WebkitBoxShadow: "5px 5px 16px rgba(0, 0, 0, 0.3)",
    boxShadow: "  5px 5px 16px rgba(0, 0, 0, 0.3)",
  },
  content: {
    position: "relative",
    backgroundColor: "#ffffff",
    padding: "15px",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#AC3F21",
    // fontFamily: "Cabin Sketch family, cursive",
  },
  pos: {
    marginBottom: 12,
  },
});

function BeerCard(props) {
  const beerLst = props.beer;
  const classes = useStyles();

  return (
    <>
      {beerLst.map((beer) => {
        return (
          <Card key={beer.id} className={classes.root}>
            <h3 className={classes.title}>{beer.name}</h3>
            {/* <CardContent className={classes.content}> */}
              <p>Type: {beer.brewery_type}</p>

              {beer.phone ? <p>Ph#: {beer.phone}</p> : null}
              {beer.street ? (
                <p>
                  {" "}
                  {beer.street} {beer.city}, {beer.state}{" "}
                  {beer.postal_code}{" "}
                </p>
              ) : (
                <p>No address listed</p>
              )}
              {beer.website_url ? (
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                  href={beer.website_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  visit site
                </Button>
              ) : (
                <p>No phone listed</p>
              )}
            {/* </CardContent> */}
          </Card>
        );
      })}
    </>
  );
}

export default BeerCard;
