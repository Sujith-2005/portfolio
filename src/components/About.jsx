import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="title"><span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginRight: '10px', fontSize: '20px' }}>01.</span> About Me</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px' }}>
                <div style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '15px' }}>
                        Hello! I'm Sujith, a Computer Science student at MLR Institute of Technology, specializing in Artificial Intelligence and Machine Learning.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        I enjoy bridging the gap between data science and web development. My goal is to build scalable applications that solve real-world problems using modern technologies like Python, React, and TensorFlow.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                        listStyle: 'none',
                        marginTop: '20px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px'
                    }}>
                        {['Python', 'React', 'TensorFlow', 'Flask', 'Java', 'Git'].map(tech => (
                            <li key={tech} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>▹</span> {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Profile Image */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '300px',
                        margin: '0 auto',
                        position: 'relative',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                        transition: 'transform 0.3s ease',
                    }}>
                        <img
                            src="/profile.jpg"
                            alt="P. Sujith"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                filter: 'grayscale(100%)',
                                transition: 'filter 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.filter = 'none'}
                            onMouseOut={(e) => e.target.style.filter = 'grayscale(100%)'}
                        />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(100, 255, 218, 0.1)',
                            pointerEvents: 'none',
                            transition: 'background 0.3s ease'
                        }} />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
