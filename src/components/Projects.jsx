import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Healthcare Automation Prototype",
            description: "Designed AI-powered healthcare system integrating voice-enabled functions, reducing manual medication lookup time by 60%.",
            tech: ["Python", "AI/ML", "Voice API"],
            links: { github: "https://github.com/Sujith-2005", external: "#" }
        },
        {
            title: "Prescription Comparator",
            description: "Developed an intelligent prescription comparator and voice-based reminder system. Runner-Up at INIT SAGA 2025 Hackathon.",
            tech: ["React", "Flask", "OCR"],
            links: { github: "https://github.com/Sujith-2005", external: "#" }
        },
        {
            title: "Space Analysis Visualization",
            description: "Data visualization project analyzing Space Race trends and Police Death statistics in the US.",
            tech: ["Pandas", "Matplotlib", "Data Viz"],
            links: { github: "https://github.com/Sujith-2005", external: "#" }
        },
        {
            title: "Full-Stack Portfolio",
            description: "A premium personal portfolio website showcasing skills and projects with smooth animations and dark mode aesthetics.",
            tech: ["React", "Vite", "Framer Motion"],
            links: { github: "https://github.com/Sujith-2005", external: "#" }
        }
    ];

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="title"><span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginRight: '10px', fontSize: '20px' }}>03.</span> Some Things I've Built</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px', marginTop: '50px' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -7 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            padding: '2rem 1.75rem',
                            borderRadius: '4px',
                            boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%'
                        }}
                    >
                        <header>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                                <div style={{ color: 'var(--accent-color)', fontSize: '40px' }}>
                                    📁
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '20px' }}>
                                        <FaGithub />
                                    </a>
                                    <a href={project.links.external} style={{ color: 'var(--text-secondary)', fontSize: '20px' }}>
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                            <h3 style={{ fontSize: '22px', marginBottom: '10px', color: 'var(--text-primary)' }}>
                                <a href={project.links.github} style={{ color: 'inherit' }}>{project.title}</a>
                            </h3>
                            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                {project.description}
                            </p>
                        </header>

                        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                            {project.tech.map(t => <li key={t}>{t}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
