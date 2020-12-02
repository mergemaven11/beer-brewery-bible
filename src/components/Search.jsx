import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

function Search() {
  const classes = useStyles();

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className={classes.container}>
      <FormControl variant='filled' className={classes.formControl}>
        <InputLabel id='demo-simple-select-filled-label'>State</InputLabel>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={state}
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Search;
