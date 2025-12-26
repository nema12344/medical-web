'use client';

import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { VerifiedUser, Engineering, SupportAgent, LocalShipping } from '@mui/icons-material';

const highlights = [
    {
        title: 'Global Standards',
        description: 'Our facilities and products adhere to strict ISO 13485:2016 and WHO-GMP guidelines, ensuring world-class safety and reliability for every procedure.',
        icon: <VerifiedUser fontSize="large" sx={{ color: '#D0252C' }} />
    },
    {
        title: 'Advanced Manufacturing',
        description: 'Equipped with state-of-the-art German moulding technology and automated assembly lines to deliver precision-engineered medical disposables.',
        icon: <Engineering fontSize="large" sx={{ color: '#D0252C' }} />
    },
    {
        title: '24/7 Expert Support',
        description: 'Our dedicated team of medical product specialists is available round-the-clock to assist hospitals and distributors with technical queries.',
        icon: <SupportAgent fontSize="large" sx={{ color: '#D0252C' }} />
    },
    {
        title: 'Rapid Global Delivery',
        description: 'With a robust logistics network spanning over 50 countries, we guarantee timely delivery of critical medical supplies without compromise.',
        icon: <LocalShipping fontSize="large" sx={{ color: '#D0252C' }} />
    }
];

export default function HighlightsMUI() {
    return (
        <Box component="section" sx={{ py: 12, bgcolor: '#F8FAFC' }}>
            <Box sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 3, md: 6 } }}>
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#D0252C',
                            fontWeight: 700,
                            letterSpacing: 1.5,
                            fontSize: '0.875rem',
                            display: 'block',
                            mb: 2
                        }}
                    >
                        WHY CHOOSE TNX SURGICAL
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#0F2A44',
                            mb: 3,
                            fontFamily: 'var(--font-heading, sans-serif)',
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        Excellence in Every Detail
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            color: '#4A5568',
                            fontSize: '1.125rem',
                            lineHeight: 1.7
                        }}
                    >
                        We combine cutting-edge technology with unwavering commitment to quality to serve the global healthcare community.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {highlights.map((item, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index} sx={{ display: 'flex' }}>
                            <Card
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: 4,
                                    border: '1px solid #E0E7FF',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 24px rgba(15, 42, 68, 0.08)',
                                        borderColor: '#D0252C'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: '50%',
                                            bgcolor: 'rgba(208, 37, 44, 0.08)',
                                            mb: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#0F2A44',
                                            mb: 2,
                                            fontFamily: 'var(--font-heading, sans-serif)'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#4A5568',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
