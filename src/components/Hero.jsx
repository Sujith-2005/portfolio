import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            id="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '0 20px',
                maxWidth: '1000px',
                margin: '0 auto'
            }}
        >
            <motion.p
                style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginBottom: '20px' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                Hi, my name is
            </motion.p>

            <motion.h1
                style={{ fontSize: 'clamp(40px, 8vw, 80px)', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '10px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                P. Sujith.
            </motion.h1>

            <motion.h2
                style={{ fontSize: 'clamp(30px, 6vw, 60px)', color: 'var(--text-secondary)', lineHeight: 1.1, marginBottom: '20px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                I build intelligent systems.
            </motion.h2>

            <motion.p
                style={{ maxWidth: '540px', fontSize: '18px', marginBottom: '50px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Computer Science student specializing in AI & ML with a knack for Full-Stack Development.
                I design scalable web apps and AI-powered solutions.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ display: 'flex', gap: '20px' }}
            >
                <a href="mailto:sujithpanganuri2005@gmail.com" className="button">
                    Get In Touch
                </a>
                <a href="/resume.docx" target="_blank" rel="noopener noreferrer" className="button" style={{ color: 'var(--text-primary)', borderColor: 'var(--text-primary)' }}>
                    Resume
                </a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
