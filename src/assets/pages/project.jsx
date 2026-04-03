import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../css/global.css'

const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Lawrencejay22/repos');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setProjects(data);
                } else {
                    console.error("GitHub API Error:", data);
                    setProjects([]);
                }
            } catch (error) {
                console.error("Failed to fetch projects:", error);
                setProjects([]);
            }
        }
        fetchProjects();
    }, []);
    return (
        <>
            <Header />
            <main>
                <section className="project-section">
                    <h1>Projects</h1>
                    <p>Here are some of my projects:</p>
                </section>
                <section className="project-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h2>{project.name}</h2>
                            <p>{project.description || 'No description provided.'}</p>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Project;