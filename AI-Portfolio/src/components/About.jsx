import {Container,  Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faNewspaper,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <Container id='about' className='Aboutus'>
        <Row>
            <Col xs={12} md={12} lg={12}>
            <h1 className='about-us-title title'>about us</h1>
            <h1 className='about-txt-bg'>about us</h1>
            </Col>
            <Col xs={12} lg={12} className='about-contents'>
                <Row>
                    <Col lg={4} className='about-content'>
                    <FontAwesomeIcon icon={faNewspaper} className='about-icon' />
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                    </Col>
                    <Col lg={4} className='about-content'>
                    <FontAwesomeIcon icon={faCoffee} className='about-icon' />
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit jjjamet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                    </Col>
                    <Col lg={4} className='about-content'>
                    <FontAwesomeIcon icon={faCoffee} className='about-icon' />
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default About
