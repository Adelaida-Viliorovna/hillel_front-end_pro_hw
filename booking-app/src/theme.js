import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#a8dadc',
        },
        secondary: {
            main: '#457b9d',
        },
        background: {
            default: '#f1faee',
        },
    },
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#a8dadc',
        },
        secondary: {
            main: '#457b9d',
        },
        background: {
            default: '#1c1c1c',
        },
    },
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

export { lightTheme, darkTheme };