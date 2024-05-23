import React, { useState } from 'react';
import './portfolio.css';
import IMG1 from '../../Assets/Todo.jpeg';
import IMG2 from '../../Assets/undercon.png';
import pro3p1 from '../../Assets3/project3img.png';
import pro3p2 from '../../Assets3/pro3p2.png';
import pro3p3 from '../../Assets3/pro3p3.png';
import pro4p1 from '../../Assets3/project4p1.jpg';
import pro4p2 from '../../Assets3/project4p2.jpg';
import pro4p3 from '../../Assets3/project4p3.png';
import pro1p1 from '../../Assets3/project1p1.png';
import pro1p2 from '../../Assets3/project1p2.png';
import trees from '../../Assets3/trees.png';
import pro5p2 from '../../Assets3/project5p2.png';
import pro5p3 from '../../Assets3/project5p3.png';
import Popup from './Popup'; // Import the Popup component

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Todo App with REACT',
    github: 'https://github.com/m1chele11/Todo-Project',
    demo: 'https://illustrious-maamoul-f1b203.netlify.app',
    description: 'This modern UI Todo app, developed with React, allows users to upload and delete tasks efficiently. The tasks are saved locally, ensuring that they persist even if the user exits the site. This project highlights my skills in React development, state management, and local storage integration.',
    screenshots: [pro1p1, pro1p2],
  },  
  {
    id: 2, 
    image: IMG2,
    title: 'Wellness Managment System',
    github: 'https://github.com/gwashel/oceanwell-frontend',
    demo: 'https://github.com/m1chele11/Project8/blob/main/Project8.gif',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    screenshots: [IMG1, IMG1],
  },
  {
    id: 3, 
    image: pro3p1,
    title: 'Android Movie Browsing App',
    github: 'https://github.com/m1chele11/Project8',
    demo: 'https://github.com/m1chele11/Project8/blob/main/Project8.gif',
    description: 'Developed using Kotlin and XML in Android Studio, this Android app leverages IMDBs RESTful API to fetch and display movie information. Users can search for movies and are seamlessly directed to the IMDB site for detailed information. The app also provides convenient sharing options, allowing users to share movie details via text, email, or other apps. This project showcases my skills in mobile development, API integration, and user interface design.',
    screenshots: [pro3p2, pro3p3],
  },
  {
    id: 4, 
    image: pro4p1,
    title: 'Android Sensors Playground',
    github: 'https://github.com/m1chele11/Project8/blob/main/Project10/app/src/main/java/edu/iu/mbarrant/project10/MainActivity.kt',
    demo: 'https://github.com/m1chele11/Project8/blob/main/Project10/Project10.gif',
    description: 'This app, developed using Kotlin and XML with Jetpack Compose in Android Studio, serves as a playground for exploring various phone sensors. It features a ball that moves based on the phones physical movement along the x, y, and z axes. Additionally, the app displays the phones current location (city, state), temperature, and air pressure, all gathered from the phones sensors. This project demonstrates my expertise in sensor integration and modern Android development practices.',
    screenshots: [pro4p2, pro4p3],
  },

  {
    id: 5,
    image: trees,
    title: "Comprehensive Graph & Tree Analysis",
    github: "https://github.com/m1chele11/DSA/tree/main/DSA",
    demo: "https://github.com/m1chele11/DSA/tree/main/DSA",
    description: "This project, developed in Java, focuses on advanced tree and graph traversal algorithms, including the use of queues and the identification of strongly connected components. The implementation showcases a thorough understanding of data structures and algorithms, demonstrating techniques such as depth-first search, breadth-first search, and component analysis. This project is a testament to my skills in object-oriented programming and my ability to solve complex problems in graph theory and data structure optimization.",
    screenshots: [pro5p2, pro5p3]
}

  
  
];

const Portfolio = () => {
  const [popupProject, setPopupProject] = useState(null);

  const openPopup = (project) => {
    setPopupProject(project);
  };

  const closePopup = () => {
    setPopupProject(null);
  };

  return (
    <section id='portfolio'>
      <h5>A Bit of My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map((project) => (
          <article key={project.id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className='portfolio__item-cta'>
              <a href={project.github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
              <a href={project.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
              <button className='btn btn-secondary' onClick={() => openPopup(project)}>More</button>
            </div>
          </article>
        ))}
      </div>

      {popupProject && <Popup project={popupProject} onClose={closePopup} />}
    </section>
  );
};

export default Portfolio;

