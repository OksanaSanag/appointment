import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { APIurl } from '../api';

import CheckboxSpeciality from '../components/CheckboxSpeciality';
import ListOfDoctors from '../components/ListOfDoctors';

function Doctors() {
  const [list, setList] = useState([]);
  let specsArray = [];

  useEffect(() => {
    const urlAPI = APIurl;

    axios.get(urlAPI).then((resp) => {
      const allDoctors = resp.data;
      setList(allDoctors);
    });
  }, []);

  const listView = list.map((item) => {
    return (
      <div key={item.id}>
        <ListOfDoctors
          doctorName={item.name}
          doctorLastName={item.lastName}
          doctorSpecialization={item.specialization}
        />
      </div>
    );
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const getFilterSpecs = (specs) => {
    specsArray = specs;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Doctors page</h1>
      <Grid container spacing={6} columns={16}>
        <Grid item xs={5}>
          <Item>
            <CheckboxSpeciality getFilterSpecs={getFilterSpecs} />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>{listView}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Doctors;
