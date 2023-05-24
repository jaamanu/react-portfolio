import React from 'react';
import TechStack from './Techstack';

const ProjectItem = ({ img, title, link, code, techStack }) => {
  return (
    <div className='relative group'>
      <div className='overflow-hidden'>
        <img src={img} alt={title} className='w-full' />
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
        <div className='text-blue-500 shadow-slate-50 bg-white  text-center'>
          <a href={link} className='text-xl font-bold mb-2'>{title}</a>
          <div className='flex justify-center space-x-2'>
          <a href={link} className='bg-blue-950  text-white px-2 py-1 rounded hover:bg-blue-400 transition-colors duration-300'>Live Demo</a>
            <a href={code} className='bg-gray-800 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors duration-300'>Code</a>
          </div>
        </div>
      </div>
      <TechStack techStack={techStack} />
    </div>
  );
};

export default ProjectItem;
