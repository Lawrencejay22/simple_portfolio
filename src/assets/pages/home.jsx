import Header from "../components/header";
import Footer from "../components/footer";
import useTypingEffect from "../Javascript/usetypingEffect";
import logo1 from "../components/image/655216801_4119246395052392_1790540973103609579_n.png";
import '../css/global.css'

export default function Home() {
    const roles = [
        'Web Developer',
        'Web Designer',
        'UI/UX Designer',
        'Beginner Programmer'
    ]
    const typingText = useTypingEffect(roles, 170, 90, 1000);
    const handleLetsTalk = () => {
        window.location.href = 'mailto:gabionzalawrencejay@gmail.com?subject=Project Inquiry&body=Hi Lawrence, I\'d like to discuss...';
    }
    return (
        <>
            <Header />
            <section className="hero">
                <div className="intro-text">
                    <h1 style={{ fontSize: '3rem', color: '#fff', fontWeight: 'bold', justifyContent: 'space-between' }}>
                        Hi, I'm Lawrence Jay Gabionza</h1>
                    <h3 className="typing-text">And I'm a <span>{typingText}</span></h3>
                    <br />
                    <p>
                        I am Lawrence Jay Gabionza, a 19-year-old college student from Iloilo City, Philippines
                        Currently taking up a Bachelor of Science in Information Technology at Iloilo Science and Technology University
                        I want to improve my skills and motivation in the world of programming and web development.
                        I am a friendly person who can easily get along with other people and communicate with them.
                        A student, what I want to be is a successful this 2026 - 2028
                    </p>
                    <button className="btn-primary" onClick={handleLetsTalk}>Let's talk.</button>
                </div>
                <div className="profile-right1" >
                    <img src={logo1} alt="logo" className="profile-photo" />
                </div>
            </section>
            <section className="services">
                <h3>My bigenner skills</h3>
                <h2>What should i do</h2>
                <div className="service-boxes">
                    <div className="service-card">
                        <div className="icon">🧩</div>
                        <h4>UI/UX Designer</h4>
                        <p> As a beginner i can make a simple ui/ux design for your website that I can improve the
                            <br />
                            design that I can do twice  is common design and modern design
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="icon">🎨</div>
                        <h4>Graphic Designer</h4>
                        <p> As a beginner programmer i can do a simple graphic design/modern design and the logo
                            <br />
                            for your website
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="icon">💻</div>
                        <h4>Web Designer</h4>
                        <p> As a beginner programmer i can do a simple web design for your website/ common design/modern design
                            <br />
                            for your website that I can recode it
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="icon">😊</div>
                        <h4>Beginner Programmer</h4>
                        <p>I am a beginner programmer, and I am learning to code. I am a hard worker, and I am determined to succeed.</p>
                    </div>
                </div>
                <br />
            </section>
            <Footer />
        </>
    )
}

