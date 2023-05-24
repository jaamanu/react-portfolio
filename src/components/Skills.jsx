import React from 'react';

const Skills = () => {
  return (
    <div className='skillsDiv flex flex-col items-center' id='skills'>
      <h2 className='text-2xl font-bold text-center text-[#001b5e] mt-4' data-aos='fade-bottom'>Skills Set</h2>
      <div data-aos='fade-right' className='skillsDivSm flex flex-wrap'>
        <div className='w-full md:w-1/3 px-4 mb-4'>
          <div className='bg-white shadow-lg shadow-slate-700 rounded-lg p-4'>
            <h3 className='text-xl text-left text-[#001b5e]'>Frameworks and Tools</h3>
            <ul className='flex flex-col bg-blue-950  text-white px-2 py-1 rounded hover:bg-blue-400 transition-colors duration-300'>
              <li>React.js</li>
              <li>Ruby on Rails</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>Jest</li>
              <li>Git</li>
              <li>Rspec</li>
            </ul>
          </div>
        </div>

        <div className='w-full md:w-1/3 px-4 mb-4'>
          <div className='bg-white shadow-lg shadow-slate-700 rounded-lg p-4'>
            <h3 className='text-xl text-left text-[#001b5e]'>Languages and Web Development</h3>
            <ul className='flex flex-col bg-blue-950  text-white px-2 py-1 rounded hover:bg-blue-400 transition-colors duration-300'>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>

        <div className='w-full md:w-1/3 px-4 mb-4'>
          <div className='bg-white shadow-lg shadow-slate-700 rounded-lg p-4'>
            <h3 className='text-xl text-left text-[#001b5e]'>Soft Skills</h3>
            <ul className='flex flex-col bg-blue-950  text-white px-2 py-1 rounded hover:bg-blue-400 transition-colors duration-300'>
              <li>Project Management</li>
              <li>Communication</li>
              <li>Attention to Detail</li>
              <li>Remote Work</li>
              <li>Collaboration</li>
              <li>Peer-to-Peer review</li>
              <li>Teamwork</li>
              <li>Mentoring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
