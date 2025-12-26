'use client';

import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Container } from '@mui/material';
import { VerifiedUser, Engineering, SupportAgent, LocalShipping } from '@mui/icons-material';

const highlights = [
    {
        title: 'Global Standards',
        description: 'Our facilities and products adhere to strict ISO 13485:2016 and WHO-GMP guidelines, ensuring world-class safety and reliability for every procedure.',
        icon: <VerifiedUser fontSize="medium" sx={{ color: '#D0252C' }} />
    },
    {
        title: 'Advanced Manufacturing',
        description: 'Equipped with state-of-the-art German moulding technology and automated assembly lines to deliver precision-engineered medical disposables.',
        icon: <Engineering fontSize="medium" sx={{ color: '#D0252C' }} />
    },
    {
        title: '24/7 Expert Support',
        description: 'Our dedicated team of medical product specialists is available round-the-clock to assist hospitals and distributors with technical queries.',
        icon: <SupportAgent fontSize="medium" sx={{ color: '#D0252C' }} />
    },
    {
        title: 'Rapid Global Delivery',
        description: 'With a robust logistics network spanning over 50 countries, we guarantee timely delivery of critical medical supplies without compromise.',
        icon: <LocalShipping fontSize="medium" sx={{ color: '#D0252C' }} />
    }
];

export default function HighlightsMUI() {
    return (
        <Box component="section" sx={{ py: 8, bgcolor: '#F8FAFC' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#D0252C',
                            fontWeight: 700,
                            letterSpacing: 1.2,
                            fontSize: '0.8rem',
                            display: 'block',
                            mb: 1
                        }}
                    >
                        WHY CHOOSE TNX SURGICAL
                    </Typography>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#0F2A44',
                            mb: 2,
                            fontFamily: 'var(--font-heading, sans-serif)',
                            fontSize: { xs: '1.75rem', md: '2.5rem' }
                        }}
                    >
                        Excellence in Every Detail
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '700px',
                            mx: 'auto',
                            color: '#4A5568',
                            fontSize: '1rem',
                            lineHeight: 1.6
                        }}
                    >
                        We combine cutting-edge technology with unwavering commitment to quality to serve the global healthcare community.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {highlights.map((item, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                            <Card
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    width: '100%',
                                    borderRadius: 3,
                                    border: '1px solid #E0E7FF',
                                    bgcolor: '#FFFFFF',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 16px rgba(15, 42, 68, 0.06)',
                                        borderColor: '#D0252C'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 }, display: 'flex', gap: 2, width: '100%' }}>
                                    <Box
                                        sx={{
                                            flexShrink: 0,
                                            width: 48,
                                            height: 48,
                                            borderRadius: '12px',
                                            bgcolor: 'rgba(208, 37, 44, 0.06)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mt: 0.5
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                color: '#0F2A44',
                                                mb: 1,
                                                fontSize: '1.1rem',
                                                fontFamily: 'var(--font-heading, sans-serif)'
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#4A5568',
                                                lineHeight: 1.6,
                                                fontSize: '0.925rem'
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
