import Header from "../components/header";
import Footer from "../components/footer";
import '../css/global.css'

export default function Skills() {
    const skills = [
        {
            icon: 'fa-brands fa-html5',
            title: 'HTML',
            description: 'I have solid experience in structuring responsive and accessible web pages using semantic HTML5 elements. I design clean layouts that serve as the foundation for modern web interfaces.'
        },
        {
            icon: 'fa-brands fa-css3-alt',
            title: 'CSS',
            description: 'Experienced in styling user interfaces using CSS3 and modern frameworks. I apply Flexbox, Grid, and animations to enhance design responsiveness and user experience.'
        },
        {
            icon: 'fa-brands fa-js',
            title: 'JavaScript',
            description: 'Skilled in implementing interactive features with JavaScript, including form validation, dynamic content updates, and event-driven web functionality.'
        },
        {
            icon: 'fa-solid fa-react',
            title: 'React',
            description: 'Experienced in building modern, responsive user interfaces with React and its ecosystem. I leverage hooks, context, and state management to create efficient and maintainable applications.'
        },
        {
            icon: 'fa-solid fa-vite',
            title: 'Vite',
            description: 'Proficient in using Vite for fast and efficient development of modern web applications. I utilize its features for optimized build processes and seamless development experience.'
        },
        {
            icon: 'fa-brands fa-php',
            title: 'PHP',
            description: 'I\'ve developed dynamic web applications using PHP and MySQL, handling backend logic, form processing, and database management efficiently for real-world projects.'
        },
        {
            icon: 'fa-solid fa-database',
            title: 'MongoDB',
            description: 'I have experience working with MongoDB for NoSQL database management, designing flexible schemas and performing CRUD operations to support dynamic web applications.'
        },
        {
            icon: 'fa-solid fa-server',
            title: 'Node.js',
            description: 'Skilled in using Node.js for server-side development, creating RESTful APIs, and handling backend logic to build scalable web applications.'
        },
        {
            icon: 'fa-solid fa-server',
            title: 'Express',
            description: 'Experienced in using Express.js to build fast, robust, and scalable backend applications and RESTful APIs.'
        },
        {
            icon: 'fa-brands fa-figma',
            title: 'Figma',
            description: 'Experienced in using Figma for UI/UX design, creating wireframes, prototypes, and high-fidelity designs for web and mobile applications.'
        }
    ];
    return (
        <>
            <Header />
            <main>
                <section className="skills-section">
                    <h1 className="section-title">My Technical Skills</h1>
                    <p className="section-description">here my bigenner skills that i have learn only the css that
                        i modern this portfolio sometimes theres a time to get an error and get frustrated but i
                        didnt give up and i keep on learning and practicing and now i can make a website that i can
                        be proud of myself and i will continue to learn and improve my skills with the help of my
                        teachers and friends.
                    </p>
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <i className={skill.icon}></i>
                            <div>
                                <h2>{skill.title}</h2>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

