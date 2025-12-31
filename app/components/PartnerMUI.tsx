'use client';

import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Fade,
    Paper,
    Stack
} from '@mui/material';
import {
    VerifiedUser,
    TrendingUp,
    Public,
    SupportAgent,
    Handshake,
} from '@mui/icons-material';

const partnersData = [
    {
        id: 0,
        title: 'Quality Assurance',
        description: 'We adhere to the strictest global standards including ISO 13485:2016, WHO-GMP, and CE certification. Every batch undergoes rigorous multi-stage testing to ensure zero-defect delivery for critical medical procedures.',
        stat: '100% Compliance',
        icon: <VerifiedUser />
    },
    {
        id: 1,
        title: 'Cost Efficiency',
        description: 'Leveraging automated manufacturing and optimized supply chains, we deliver premium medical disposables at competitive price points without sacrificing performance or safety.',
        stat: '30% Cost Savings',
        icon: <TrendingUp />
    },
    {
        id: 2,
        title: 'Global Logistics',
        description: 'With a robust presence in over 50 countries, our logistics team ensures timely, compliant, and secure delivery of medical supplies anywhere in the world, maintaining sterility and integrity.',
        stat: '50+ Countries',
        icon: <Public />
    },
    {
        id: 3,
        title: 'Technical Support',
        description: 'Our relationship doesn’t end at sales. We provide 24/7 expert support, clinical training materials, and regulatory documentation assistance to help you succeed in your market.',
        stat: '24/7 Availability',
        icon: <SupportAgent />
    },
    {
        id: 4,
        title: 'OEM/ODM Solutions',
        description: 'We offer tailored manufacturing services, allowing you to customize product specifications, branding, and packaging to meet your specific market needs and regulatory requirements.',
        stat: 'Custom Branding',
        icon: <Handshake />
    }
];

export default function PartnerMUI() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const activeContent = partnersData[selectedIndex];

    return (
        <Box component="section" sx={{ py: 12, bgcolor: '#FFFFFF' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#D0252C',
                            fontWeight: 700,
                            letterSpacing: 1.5,
                            display: 'block',
                            mb: 2
                        }}
                    >
                        WHY PARTNER WITH US
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            color: '#0F2A44',
                            fontFamily: 'var(--font-heading, sans-serif)',
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        Building Trust Through <span style={{ color: '#D0252C' }}>Excellence.</span>
                    </Typography>
                </Box>

                {/* Horizontal Tabs / Buttons Row */}
                <Grid container spacing={2} sx={{ mb: 6, justifyContent: 'center' }}>
                    {partnersData.map((item, index) => (
                        <Grid item xs={6} md={true} key={item.id}>
                            <Box
                                onClick={() => setSelectedIndex(index)}
                                sx={{
                                    cursor: 'pointer',
                                    p: 2,
                                    height: '100%',
                                    borderRadius: 3,
                                    border: selectedIndex === index ? '1px solid #D0252C' : '1px solid #E0E7FF',
                                    bgcolor: selectedIndex === index ? 'rgba(208, 37, 44, 0.04)' : 'transparent',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 16px rgba(15, 42, 68, 0.06)',
                                        borderColor: selectedIndex === index ? '#D0252C' : '#CBD5E1'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        color: selectedIndex === index ? '#D0252C' : '#94A3B8',
                                        mb: 1.5,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: selectedIndex === index ? 'scale(1.1)' : 'scale(1)',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: selectedIndex === index ? 700 : 600,
                                        color: selectedIndex === index ? '#0F2A44' : '#64748B',
                                        lineHeight: 1.3
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Dynamic Content Panel */}
                <Fade in={true} key={selectedIndex} timeout={500}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 4, md: 8 },
                            bgcolor: '#F8FAFC',
                            borderRadius: 6,
                            border: '1px solid #E0E7FF',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            minHeight: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Decorative Background Icon */}
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(10)', opacity: 0.03, color: '#D0252C', zIndex: 0, pointerEvents: 'none' }}>
                            {activeContent.icon}
                        </Box>

                        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: '#0F2A44',
                                    mb: 3,
                                    fontFamily: 'var(--font-heading, sans-serif)'
                                }}
                            >
                                {activeContent.title}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#4A5568',
                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                    lineHeight: 1.8,
                                    mb: 5
                                }}
                            >
                                {activeContent.description}
                            </Typography>
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-red-500 hover:bg-red-700 text-white font-bold text-lg rounded-2xl shadow-xl shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 group">
                                Learn More
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            {/* <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(4px)', py: 1.5, px: 4, borderRadius: 10, border: '1px solid rgba(208, 37, 44, 0.1)', display: 'inline-flex' }}>
                                <Typography variant="overline" sx={{ color: '#D0252C', fontWeight: 800, letterSpacing: 1 }}>
                                    KEY METRIC
                                </Typography>
                                <Box sx={{ w: '1px', h: '16px', bgcolor: '#CBD5E1', mx: 2 }} />
                                <Typography variant="h6" sx={{ color: '#0F2A44', fontWeight: 700, fontSize: '1.1rem' }}>
                                    {activeContent.stat}
                                </Typography>
                            </Stack> */}
                        </Box>
                    </Paper>
                </Fade>

            </Container>
        </Box>
    );
}
