import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { listOfStates } from './States';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyItem: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Search(props) {
  const classes = useStyles();
  const state = props.state;

  return (
    <div className={classes.container}>
      <FormControl variant='filled' className={classes.formControl}>
        <InputLabel id='demo-simple-select-filled-label'>State</InputLabel>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={state}
          onChange={props.stateSet}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>

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
