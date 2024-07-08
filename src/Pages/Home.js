import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Home.css'; // Custom CSS for styling
import anant from '../assets/anant.JPG';
import homecart from '../assets/homecart.png';
import blog from '../assets/blog.png';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={anant} alt="Anant Yadav" />
        <h1>Anant Yadav</h1>
        <p>Full Stack Developer | Software Engineer | ML Engineer</p>
      </div>
      
      <div className="carousel-container">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={blog} alt="HomeBlog - Feature-Rich Blogging Platform" />
            <p className="legend">Created a comprehensive blogging platform with a visually appealing and responsive design using React and Material-UI. Integrated a rich text editor, image uploading to Cloudinary, and a custom pagination system. Implemented a secure authentication system with JWT and MongoDB, providing a seamless user experience for both authors and readers.</p>
          </div>
          <div>
            <img src={homecart} alt="E commerce website" />
            <p className="legend">E commerce website</p>
          </div>
          {/* <div>
            <img src="image3-url.jpg" alt="Project 3" />
            <p className="legend">Project 3 Description</p>
          </div> */}
          {/* Add more slides as needed */}
        </Carousel>
      </div>

      <div className="cta-buttons">
        <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        <a href="/contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
