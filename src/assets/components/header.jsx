import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../components/image/LJAY.png'

export default function Header() {

    const [nav, setNav] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNav(true)
        } else {
            setNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    const [isMenuClose, setIsMenuClose] = useState(false)
    useEffect(() => {
        if (isMenuClose) {
            setIsMenuOpen(false)
        } else {
            setIsMenuClose(false)
        }
    }, [isMenuClose])

    const handleNav = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeNav = () => {
        setIsMenuOpen(false)
    }
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }
    const navLinks = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'About', path: '/about' },
        { id: 3, title: 'Skills', path: '/skills' },
        { id: 4, title: 'Projects', path: '/projects' },
    ]

    return (
        <>
            <header className='header' style={nav ? { background: '#000' } : {}}>
                <button className="menu-toggle" onClick={handleNav} aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <a href="/" className="logo" data-discover="true">
                    <span>LJAY</span>
                    <img src={logo} alt="logo" />
                </a>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list-links">
                        {navLinks.map(navLink => (
                            <li key={navLink.id} className={`nav-link ${isActive(navLink.path)}`}>
                                <Link to={navLink.path} onClick={closeNav}>{navLink.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="social-icons">
                    <ul className='social-list'>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61582871464053" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@lawrencejaygabionza4422/playlists" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Lawrencejay22" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
