import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const jobs = [
        {
            title: "Developer",
            company: "AI & Web Projects",
            range: "Present",
            duties: [
                "Designed AI-powered healthcare and automation prototypes integrating voice-enabled systems, reducing manual medication lookup time by 60%.",
                "Deployed scalable web apps using Python (Flask) and React, improving system response time and user experience.",
                "Collaborated in cross-functional teams to prototype and present tech solutions under 36-hour hackathon constraints."
            ]
        },
        {
            title: "Student",
            company: "MLR Institute",
            range: "2023 - 2027",
            duties: [
                "Pursuing B.Tech in Computer Science and Engineering (AI & ML).",
                "Building strong foundations in Data Structures, Algorithms, and Full-Stack Development.",
                "Participated in INIT SAGA 2025 Hackathon (Healthcare Domain) as Runner-Up."
            ]
        }
    ];

    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '700px' }}
        >
            <h2 className="title"><span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginRight: '10px', fontSize: '20px' }}>02.</span> Where I've Worked</h2>

            <div style={{ display: 'flex', marginTop: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid var(--card-bg)' }}>
                    {jobs.map((job, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                borderLeft: activeTab === index ? '2px solid var(--accent-color)' : '2px solid transparent',
                                padding: '10px 20px',
                                textAlign: 'left',
                                color: activeTab === index ? 'var(--accent-color)' : 'var(--text-secondary)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                cursor: 'pointer',
                                marginLeft: '-2px',
                                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                                backgroundColor: activeTab === index ? 'rgba(17, 34, 64, 0.5)' : 'transparent'
                            }}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                <div style={{ paddingLeft: '30px', minHeight: '320px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 500, marginBottom: '5px' }}>
                        {jobs[activeTab].title} <span style={{ color: 'var(--accent-color)' }}>@ {jobs[activeTab].company}</span>
                    </h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '25px' }}>
                        {jobs[activeTab].range}
                    </p>

                    <ul style={{ listStyle: 'none' }}>
                        {jobs[activeTab].duties.map((duty, index) => (
                            <li key={index} style={{ marginBottom: '20px', position: 'relative', paddingLeft: '30px', color: 'var(--text-secondary)', fontSize: '16px' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>▹</span>
                                {duty}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
