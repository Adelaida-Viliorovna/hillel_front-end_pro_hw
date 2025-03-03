import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <AppBar position='static' >
            <Toolbar>
                <Typography variant='body1' sx={{flexGrow: 1}}>
                     2025 Booking App | Lyzohub Anastasiia
                </Typography>
                <Button 
                    color='inherit' 
                    component="a" 
                    href='https://github.com/Adelaida-Viliorovna' 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    GitHub
                </Button>
            </Toolbar>
        </AppBar>
    )
}