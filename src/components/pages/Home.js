import React from 'react'
import Control from '../Control/Control'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container' style={{ height: '200px' }}>
            <h1 className="h4 text-center">Here is an Exclusive offer with 30% off for you
            <Link to='/products'> Shop Now</Link>
            </h1>
            <Carousel  >
                <Carousel.Item>
                    <img
                        style={{ height: '500px', width: '80vw' }}
                        className="d-block w-100"
                        src={Control.imagefour}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>Heading One</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px', width: '100%' }}
                        className=" d-block w-100"
                        src={Control.imagetwo}
                        alt="second Slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Heading two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px', width: '100%' }}
                        className="d-block w-100"
                        src={Control.imagethree}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Heading three</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, repudiandae.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
