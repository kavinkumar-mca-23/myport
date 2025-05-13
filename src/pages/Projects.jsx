import React from 'react';
import { FaGithub } from 'react-icons/fa';
import project1Img from '../assets/fooddel.jpg';
import project2Img from '../assets/ecommerce3.jpg';
import project3Img from '../assets/currency.jpg';
import project4Img from '../assets/bus.png';
import bgImage from '../assets/project-bg.jpg';

const projects = [
  {
    title: 'Food Delivery',
    description: 'Built with React.js and JavaScript, this food ordering website provides seamless UX with real-time updates.',
    image: project1Img,
    link: 'https://fooddeliverywebsite-2s1b.onrender.com'
  },
  {
    title: 'E-Commerce',
    description: 'Online shopping experience with responsive design and smooth navigation using React.js.',
    image: project2Img,
    link: 'https://ecom-pegx.onrender.com/'
  },
  {
    title: 'Currency Converter',
    description: 'Convert currencies in real time using JavaScript and REST APIs with a clean, responsive interface.',
    image: project3Img,
    link: 'https://vishnu-mca2023.github.io/Currency/'
  },
  {
    title: 'College Transport System',
    description: 'MERN stack-based system for bus booking, real-time tracking, and schedule management.',
    image: project4Img,
    link: 'https://transportation-managementsystem-frontnend.onrender.com'
  },
];

const styles = {
  section: {
    padding: '40px 0',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'rgba(0,0,0,0.3)',
    backgroundColor: '#111',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    paddingLeft: '250px'
  },
  container: {
    width: '90%',
    margin: 'auto'
  },
  heading: {
    textAlign: 'center',
    color: '#00c6ff',
    marginBottom: '40px'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  card: {
    background: '#222',
    borderRadius: '12px',
    width: '300px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  img: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  cardBody: {
    padding: '20px'
  },
  cardTitle: {
    color: '#00ffe5',
    marginBottom: '10px'
  },
  description: {
    fontSize: '14px',
    color: '#ccc',
    marginBottom: '15px'
  },
  link: {
    color: '#00c6ff',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px'
  }
};

const shakeStyle = 'scale(1.05) rotate(1deg)';

const Projects = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>PROJECTS</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = shakeStyle;
                e.currentTarget.style.boxShadow = '0 16px 30px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
              }}
            >
              <img src={project.image} alt={project.title} style={styles.img} />
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  <FaGithub />
                  Run the Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
