import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px', // Standard height
                padding: '0 50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
                zIndex: 1000,
                transition: 'all 0.3s ease-in-out'
            }}
        >
            <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '24px' }}>
                P. Sujith
            </div>

            <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
                {links.map((link, index) => (
                    <motion.li
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                    >
                        <a
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '13px',
                                fontFamily: 'var(--font-mono)',
                            }}
                            onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            <span style={{ color: 'var(--accent-color)', marginRight: '5px' }}>0{index + 1}.</span>
                            {link.name}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
