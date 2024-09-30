import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
            <div className="Testimonials-mob">
                <div className="headings text-center">
                <p className='mob-title'>Testimonials</p>
                <div className="testi-mob-item"></div>
            </div>
        </div>
        </Container>
    );
}

export default Testimonials;
