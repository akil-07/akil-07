import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// Mock Data - User to update
const PROJECTS = [
    {
        title: "E-Commerce Architecture",
        description: "A scalable full-stack e-commerce solution with real-time inventory management, stripe payment integration, and an admin dashboard.",
        tags: ["React", "Node.js", "PostgreSQL", "Redis"],
        links: { demo: "#", code: "#" }
    },
    {
        title: "AI Task Optimizer",
        description: "Smart task management application using machine learning to prioritize and organize daily workflows based on user patterns.",
        tags: ["Python", "FastAPI", "React", "TensorFlow"],
        links: { demo: "#", code: "#" }
    },
    {
        title: "Social Analytics Dashboard",
        description: "Real-time analytics dashboard aggregating data from multiple social media platforms into a single, cohesive view for creators.",
        tags: ["Vue.js", "D3.js", "Firebase", "Serverless"],
        links: { demo: "#", code: "#" }
    }
];

const LEETCODE_STATS = {
    totalSolved: 450,
    easy: 150,
    medium: 250,
    hard: 50,
    ranking: "Top 5%"
};

const Navbar = () => (
    <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar"
    >
        <div className="navbar-content">
            <h1 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Portfolio.</h1>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#leetcode">Stats</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </motion.nav>
);

const Hero = () => (
    <section id="about" className="hero">
        <div className="blob blob-2" />
        <div className="blob" />

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-content"
        >
            <h2 className="gradient-text hero-title">
                Crafting Digital <br /> Experiences
            </h2>
            <p className="hero-subtitle">
                Hi, I'm a Full Stack Developer based in [Location]. I build accessible,
                pixel-perfect, and performant web applications that solve real-world problems.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
        </motion.div>
    </section>
);

const Projects = () => (
    <section id="projects" className="container">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
        >
            Selected Works
        </motion.h2>
        <div className="projects-grid">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card project-card"
                >
                    <div className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <div className="project-links">
                        <a href={project.links.code} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            <FaGithub /> Code
                        </a>
                        <a href={project.links.demo} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            <FaExternalLinkAlt /> Live
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

const LeetCode = () => (
    <section id="leetcode" className="container">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
        >
            Coding Proficiency
        </motion.h2>
        <div className="leetcode-container">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: '3rem', width: '100%', maxWidth: '900px' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
                    <SiLeetcode size={40} color="#ffa116" />
                    <h3 style={{ fontSize: '2rem' }}>LeetCode Statistics</h3>
                </div>

                <div className="leetcode-stats">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="stat-card"
                    >
                        <div className="stat-circle easy">{LEETCODE_STATS.easy}</div>
                        <span className="stat-label">Easy</span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="stat-card"
                    >
                        <div className="stat-circle medium">{LEETCODE_STATS.medium}</div>
                        <span className="stat-label">Medium</span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="stat-card"
                    >
                        <div className="stat-circle hard">{LEETCODE_STATS.hard}</div>
                        <span className="stat-label">Hard</span>
                    </motion.div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'inline-block', marginRight: '2rem' }}>
                        Total Solved: <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>{LEETCODE_STATS.totalSolved}</span>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        Global Ranking: <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>{LEETCODE_STATS.ranking}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

const Footer = () => (
    <footer id="contact" style={{ borderTop: '1px solid var(--glass-border)', padding: '6rem 0 2rem 0', marginTop: '4rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's Work Together</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    I'm currently available for freelance work or full-time opportunities.
                    If you have a project that needs some creative touch, let's chat.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="#" className="btn btn-outline" style={{ borderRadius: '50%', width: '60px', height: '60px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                        <FaGithub />
                    </a>
                    <a href="#" className="btn btn-outline" style={{ borderRadius: '50%', width: '60px', height: '60px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:hello@example.com" className="btn btn-primary" style={{ borderRadius: '50%', width: '60px', height: '60px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                        ✉️
                    </a>
                </div>
            </motion.div>
            <p style={{ marginTop: '6rem', color: 'rgba(255,255,255,0.2)', fontSize: '0.9rem' }}>
                © 2024 Portfolio. Designed & Built by [Your Name].
            </p>
        </div>
    </footer>
);

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Projects />
            <LeetCode />
            <Footer />
        </div>
    );
}

export default App;
