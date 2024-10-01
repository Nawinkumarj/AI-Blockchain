import React, { useState, useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import testi from '../assets/testi.jpeg';  // Ensure this path matches your image location

const Testimonials = () => {
    const [openImageIndex, setOpenImageIndex] = useState(null);

    const handleClickOutside = (event) => {
        if (!event.target.closest('.testi-img')) {
            setOpenImageIndex(null);
        }
    };

    const toggleImage = (index) => {
        if (openImageIndex === index) {
            setOpenImageIndex(null);  // Close the image if it's already open
        } else {
            setOpenImageIndex(index);  // Open the clicked image
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <Container fluid>
            <div className='Testimonials'>
                <div className="headings text-center">
                    <h1 className='title'>Testimonials</h1>
                </div>
                <div className="testimonial-wrapper">
                    <div className="testimonial-parent">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className={`testi-img ${openImageIndex === index ? 'open' : ''}`}
                                onClick={() => toggleImage(index)}>
                                <img src={testi} alt={`Testimonial ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        <div className="testimonials-mv-container">
            <Carousel indicators={false}>
                <Carousel.Item>
                <div className="testimonial4_slide">
                    <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="img-circle img-responsive"
                    alt="Client 1"
                    />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                    </p>
                    <h4>Client 1</h4>
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div className="testimonial4_slide">
                    <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="img-circle img-responsive"
                    alt="Client 2"
                    />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                    </p>
                    <h4>Client 2</h4>
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div className="testimonial4_slide">
                    <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="img-circle img-responsive"
                    alt="Client 3"
                    />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                    </p>
                    <h4>Client 3</h4>
                </div>
                </Carousel.Item>
            </Carousel>
            </div>
        </Container>
    );
}

export default Testimonials;
