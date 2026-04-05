import Header from "../components/header";
import Footer from "../components/footer";
import logo2 from "../components/image/FB_IMG_1756519957571.png";
import resumePdf from "../../resume/Lawrence_Jay_Gabionza_resume.pdf";
import '../css/global.css'

export default function About() {
    return (
        <>
            <Header />
            <section className="hero" style={{ minHeight: '80vh', paddingBottom: '40px' }}>
                <div className="intro-text">
                    <h1 style={{ fontSize: '3rem' }}>About Me</h1>
                    <h3 style={{ fontSize: '2.5rem' }}>LJAY</h3>
                    <p>
                        I am Lawrence Jay Gabionza, a 19-year-old college student from Iloilo City, Philippines.
                        Currently taking up a Bachelor of Science in Information Technology at Iloilo Science and Technology University.
                        I want to improve my skills and motivation in the world of programming and web development.
                        I am a friendly person who can easily get along with other people and communicate with them.
                        As a student, what I want is to be successful this 2026 - 2028.
                    </p>
                    <div className="resume-download-buttons" style={{ justifyContent: 'flex-start', margin: '30px 0 0 0', justifyContent: 'space-between'}}>
                        <a href={resumePdf} download="Lawrence_Jay_Gabionza_resume.pdf" className="btn-primary" style={{ boxShadow: 'none', justifyContent: 'space-between' }}>
                            Download Resume
                        </a>
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'rgba(255, 255, 255, 0.05)', boxShadow: 'none' }}>
                            View Resume
                        </a>
                    </div>
                </div>
                <div className="profile-right2">
                    <img src={logo2} alt="profile" />
                </div>
            </section>
            <Footer />
        </>
    )
}
