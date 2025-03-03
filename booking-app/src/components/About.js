import React from 'react';
import { Container, Typography } from '@mui/material';
export default function About() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                About
            </Typography>
            <Typography variant="body1">
                This is a simple booking app created using React.
            </Typography>
        </Container>
    );
}