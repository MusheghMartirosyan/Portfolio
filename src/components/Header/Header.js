import './Header.css'
import CV from '../../CV/Mushegh_Martirosyan_ReactJS_Developer.pdf'
import ME from '../../images/My project.png'
import { BsArrowRight } from 'react-icons/bs'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <>
        <header>
            <div className='container header'>
                <h5>Hello I'm</h5>
                <h1>Mushegh Martirosyan</h1>
                <h5 style={{marginTop: '1rem'}} className='text-light'>Front-End Developer</h5>
                <div>
                    <a href={CV} className='btn' download>Download CV</a>
                    <Link to='/contact' className='btn btn-primary'>Let's Talk</Link>
                </div>
                <div className='me'>
                    <img src={ME} />
                </div>
                <span className='scroll-footer'>
                    Scroll to Footer <BsArrowRight />
                </span>
            </div>
        </header>
        <Footer/>
        </>
    )
}

export default Header