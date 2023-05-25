import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';

import { APIurlSpec } from '../api';

function Speciality() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const urlAPI = APIurlSpec;

    axios.get(urlAPI).then((resp) => {
      const allSpec = resp.data;
      console.log(allSpec);
      setList(allSpec);
    });
  }, []);

  const listSpeciality = list.map((item) => (
    <div key={item.id}>
      {item.id} {item.title}
    </div>
  ));

  return (
    <>
      <Container maxWidth="sm">
        <h1>Speciality page</h1>
        <div> {listSpeciality} </div>
      </Container>
    </>
  );
}

export default Speciality;
