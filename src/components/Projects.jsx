import React from 'react';
import ProjectItem from './ProjectItem';
import restaurantImg from '../assets/Screenshot 2023-05-23 at 15.59.13.png';
import bookshelfImg from '../assets/bookshelf.png';
import highschoolImg from '../assets/Screenshot 2023-05-23 at 16.06.45.png';
import weatherImg from '../assets/weatherapp.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[001b5e] mb-4'>My Recent Projects</h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={restaurantImg}
          title='Restaurant App'
          link='https://online-restaurant-app.netlify.app'
          code='https://github.com/jaamanu/restuarant-app'
          techStack='Built with JavaScript,HTML, CSS,API, Webpark.jest test'
        />
        <ProjectItem
          img={weatherImg}
          title='Weather App'
          link='https://weather-world-wide.netlify.app/'
          code='https://github.com/jaamanu/weather-app-cities'
          techStack='Built with JavaScript,API,CSS and HTML'
        />
        <ProjectItem
          img={bookshelfImg}
          title='BookShelf App'
          link='https://bookshelf-web-app.netlify.app/'
          code='https://github.com/jaamanu/book-store-app'
          techStack='Built with HTML,JavaScript,Visual studio,Webpack'
        />
        <ProjectItem
          img={highschoolImg}
          title='High School Managers'
          link='https://highschool-manager.netlify.app/contact.html'
          code='https://github.com/jaamanu/High-School-Managers'
          techStack='Built with JavaScript, HTML, CSS, '
        />
      </div>
    </div>
  );
};

export default Projects;
