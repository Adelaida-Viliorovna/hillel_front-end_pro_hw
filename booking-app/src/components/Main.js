import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Grid, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { fetchHotelsRequest } from '../store/store';

const validate = values => {
    const errors = {};
    if (!values.destination) {
        errors.destination = 'Required';
    }
    if (!values.checkIn) {
        errors.checkIn = 'Required';
    }
    if (!values.checkOut) {
        errors.checkOut = 'Required';
    }
    if (!values.guests) {
        errors.guests = 'Required';
    }
    return errors;
};

export default function Main() {

    const [destinations, setDestinations] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        axios.get(`${apiUrl}/destination`)
            .then(response => {
                setDestinations(response.data || []);
            })
            .catch(error => {
                console.error('Error fetching destinations:', error);
            });
    }, []);
    
    const onSubmit = (values) => {
        dispatch(fetchHotelsRequest(values));
        navigate('/hotels');
    }

    return(
        <Container>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                <InputLabel>Destination</InputLabel>
                                <Field name="destination" component="select">
                                        {({ input, meta }) => (
                                            <>
                                                <Select {...input} label="Destination" fullWidth>
                                                    {destinations.map((dest) => (
                                                        <MenuItem key={dest.id} value={dest.label}>
                                                            {dest.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </>
                                        )}
                                    </Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="checkIn">
                                    {({ input, meta }) => (
                                        <>
                                            <TextField
                                                type="date"
                                                label="Check In"
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                {...input}
                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </>
                                    )}
                                </Field>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="checkOut">
                                    {({ input, meta }) => (
                                        <>
                                            <TextField
                                                type="date"
                                                label="Check Out"
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                {...input}
                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </>
                                    )}
                                </Field>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="guests">
                                    {({ input, meta }) => (
                                        <>
                                            <TextField
                                                type="number"
                                                label="Guests"
                                                fullWidth
                                                {...input}
                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </>
                                    )}
                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}/>
        </Container>
    )
}