'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D0252C',
        },
        background: {
            default: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'var(--font-geist-sans), sans-serif',
    },
});

export default theme;
