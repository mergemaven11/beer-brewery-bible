import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { listOfStates } from "../States";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    marginBottom: "0",
    backgroundColor: "#ffff",
    padding: "15px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 600,
    // backgroundColor: 'transparent',
  },
  formInput: {
    color: "#AC3F21",
    marginLeft: "225px",
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    background: 'blue',
  },
}));

function Search(props) {
  const classes = useStyles();
  const state = props.state;

  return (
    <div className={classes.container}>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel className={classes.formInput}> Select a State</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={state}
          onChange={props.stateSet}
          // MenuProps={{
          //   getContentAnchorEl: null,
          //   anchorOrigin: {
          //     vertical: "bottom",
          //     horizontal: "left",
          //   }
          // }}
        >
          {listOfStates.map((state) => (
            <MenuItem onClick={props.stateSet} key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Search;
