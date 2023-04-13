import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {APIurl} from '../api';

import CheckboxSpeciality from '../components/CheckboxSpeciality'
import ListOfDoctors from '../components/ListOfDoctors';


function Doctors() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const urlAPI = APIurl; console.log(urlAPI, 'urlAPI');

        axios.get(urlAPI).then((resp) => {
            const allDoctors = resp.data;
            setList(allDoctors); console.log(allDoctors, 'allDoctors');
        })
    }, []);

    const listView = list.map(item => {
        return (
            <div key={item.id}>
                <ListOfDoctors doctorName={item.name} doctorLastName={item.lastName} doctorSpecialization={item.specialization} />
            </div>
        )
    });

    return(
        <>
            <h1>Doctors page</h1>
            <CheckboxSpeciality/>
            <div className='taskList'> {listView} </div>
        </>

    )
};

export default Doctors;