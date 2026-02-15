import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        { name: "Languages", skills: ["Python", "Java", "C", "SQL"] },
        { name: "Web Dev", skills: ["React", "Flask", "HTML/CSS", "JavaScript"] },
        { name: "AI & ML", skills: ["TensorFlow", "Scikit-Learn", "Pandas", "Matplotlib"] },
        { name: "Tools", skills: ["Git", "GitHub", "MySQL", "VS Code"] }
    ];

    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '800px' }}
        >
            <h2 className="title"><span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginRight: '10px', fontSize: '20px' }}>04.</span> Technical Skills</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px', marginTop: '30px' }}>
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h3 style={{ fontSize: '18px', color: 'var(--accent-color)', borderBottom: '1px solid var(--text-secondary)', paddingBottom: '5px', marginBottom: '15px' }}>
                            {category.name}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {category.skills.map(skill => (
                                <li key={skill} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', fontSize: '15px', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
