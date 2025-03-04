import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header({ toggleTheme }) {
    return(
        <AppBar position='static' >
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow: 1}}>
                    Booking App
                </Typography>
                <Button color='inherit' component={Link} to='/'>Home</Button>
                <Button color='inherit' component={Link} to='/about'>About</Button>
                <Button onClick={toggleTheme} variant="contained" color="primary">
                    Toggle Theme
                </Button>
            </Toolbar>
        </AppBar>
    )
}