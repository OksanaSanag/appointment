import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxSpeciality() {
  const [state, setState] = React.useState({
    DentistTherapist: false,
    DentistSurgeon: false,
    Endodontist: false,
    Implantologist: false,
    Orthodontist: false,
    Periodontologist: false,
    Prosthetist: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { 
    DentistTherapist, 
    DentistSurgeon, 
    Endodontist, 
    Implantologist, 
    Orthodontist, 
    Periodontologist, 
    Prosthetist
    } = state;


    return (
        <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Choose a specialization</FormLabel>
            <FormGroup>
            <FormControlLabel
                control={
                <Checkbox checked={DentistTherapist} onChange={handleChange} name="DentistTherapist" />
                }
                label="Dentist-therapist"
            />
            <FormControlLabel
                control={
                <Checkbox checked={DentistSurgeon} onChange={handleChange} name="DentistSurgeon" />
                }
                label="Dentist-surgeon"
            />
            <FormControlLabel
                control={
                <Checkbox checked={Endodontist} onChange={handleChange} name="Endodontist" />
                }
                label="Endodontist"
            />
            <FormControlLabel
                control={
                <Checkbox checked={Implantologist} onChange={handleChange} name="Implantologist" />
                }
                label="Implantologist"
            />
            <FormControlLabel
                control={
                <Checkbox checked={Orthodontist} onChange={handleChange} name="Orthodontist" />
                }
                label="Orthodontist"
            />
            <FormControlLabel
                control={
                <Checkbox checked={Periodontologist} onChange={handleChange} name="Periodontologist" />
                }
                label="Periodontologist"
            />
            <FormControlLabel
                control={
                <Checkbox checked={Prosthetist} onChange={handleChange} name="Prosthetist" />
                }
                label="Prosthetist"
            />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        </Box>
    );
}