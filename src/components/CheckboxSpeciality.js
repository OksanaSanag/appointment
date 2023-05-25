import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxSpeciality({ getFilterSpecs }) {
  const [filters, setFilters] = useState([]);

  const checkFilters = (v) => {
    filters.includes(v)
      ? setFilters((prevFilters) => prevFilters.filter((i) => i !== v))
      : setFilters((prevFilters) => [...prevFilters, v]);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    checkFilters(value);
    getFilterSpecs(value);
  };

  const specs = [
    { id: 'spec1', title: 'Dentist Therapist' },
    { id: 'spec2', title: 'Dentist Surgeon' },
    { id: 'spec3', title: 'Endodontist' },
    { id: 'spec4', title: 'Implantologist' },
    { id: 'spec5', title: 'Orthodontist' },
    { id: 'spec6', title: 'Periodontologist' },
    { id: 'spec7', title: 'Prosthetist' },
  ];

  const isChecked = (id) => filters.includes(id);

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Choose a specialization</FormLabel>
        <FormGroup>
          {specs.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Checkbox checked={isChecked(item.id)} onChange={handleChange} name={item.title} />}
              label={item.title}
            />
          ))}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </Box>
  );
}
