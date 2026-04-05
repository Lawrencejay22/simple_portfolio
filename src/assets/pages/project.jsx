import Header from "../components/header";
import Footer from "../components/footer";
import image1 from "../components/image/image1.jpg";
import image2 from "../components/image/image2.jpg";
import image3 from "../components/image/image3.jpg";
import '../css/global.css'


export default function Project() {
    const project1 = [
        {
            id1: 1,
            name: 'AwesomeTods',
            description: 'This awesometodos is a full-stack web application that I made by myself. I use the tech stack of MERN, but the tools I use are NodeJS, ExpressJS, ReactJS, mongodb but the React I use is the old one not the new one but i can use the new one but i need to practice more. the tools i use is the vscode/antigravity,github and for the deployment i use the render.com',
            image: image1,
            link: 'https://awesometodos1-2.onrender.com'
        },
    ]
    const project2 = [
        {
            id2: 2,
            name: 'BLJ-STUDY-HUB',
            description: 'This BLJ-STUDY-HUB I built it with my groupmates at Western Institute of Technology. The tools we use are the front end, the HTML, CSS, JavaScript, then the backend, we use PHP, MySQL/MySQL Workbench, and the tools I use is the vscode, XAMPP, and GitHub',
            image: image2,
            link: 'https://blj-cafe-study-hub.vercel.app/'
        },
    ]
    const project3 = [
        {
            id3: 3,
            name: 'Portfolio',
            description: 'This portfolio is a web application that I made by myself. I use the tech stack of MERN, but the tools I use is the vite i dont use it for backend. After that i reupload it to the Vercel.',
            link: 'https://simple-portfolio-weld-psi.vercel.app/'
        }
    ]
    return (
        <>
            <Header />
            <main>
                <section className="project-section">
                    <h1>Projects</h1>
                    <p>Here are some of my projects:</p>
                </section>
                <section className="project-grid">
                    {project1.map((project) => (
                        <div key={project.id1} className="project-card" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={project.image} alt={project.name} style={{
                                marginBottom: '40px', width: '100%',
                                justifyContent: 'center', textAlign: 'center', alignItems: 'center', backgroundImage: 'url(image1.jpg)',
                                backgroundSize: 'cover', bacgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                                borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s'
                            }} />
                            <div className="project-info">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="project-grid">
                    {project2.map((project) => (
                        <div key={project.id2} className="project-card" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={project.image} alt={project.name} style={{
                                width: '100%',
                                justifyContent: 'center', textAlign: 'center', alignItems: 'center', backgroundImage: 'url(image2.jpg)',
                                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                            }} />
                            <div className="project-info">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="project-grid">
                    {project3.map((project) => (
                        <div key={project.id3} className="project-card" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={project.image} alt={project.name} style={{
                                marginBottom: '40px', width: '100%',
                                justifyContent: 'center', textAlign: 'center', alignItems: 'center', backgroundImage: 'url(image1.jpg)',
                                backgroundSize: 'cover', bacgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                                borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s'
                            }} />
                            <div className="project-info">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" >View Project</a>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}
