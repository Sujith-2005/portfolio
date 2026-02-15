import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '100px' }}
        >
            <p style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '16px', marginBottom: '20px' }}>
                05. What's Next?
            </p>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--text-primary)', marginBottom: '30px' }}>
                Get In Touch
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '50px' }}>
                I am currently looking for new opportunities in AI, Machine Learning, and Full-Stack Development.
                Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <a href="mailto:sujithpanganuri2005@gmail.com" className="button">
                Say Hello
            </a>

            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <a
                    href="https://github.com/Sujith-2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)', fontSize: '24px', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/sujith-panganuri-9563522b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)', fontSize: '24px', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                    <FaLinkedin />
                </a>
            </div>
        </motion.section>
    );
};

export default Contact;
