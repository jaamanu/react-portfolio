import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white bg-slate-800 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <div>
          <h2 className="text-xl font-bold">James Asibey Manu</h2>
          <h4 className='text-l font-small'>FullStack Software Developer</h4>
        </div>
        <div>
          <h4 className="text-lg font-bold">Links</h4>
          <ul className="mt-4">
            <li>
              <a href="#contact" className="text-gray-300 hover:text-gray-100">Contact Me</a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-gray-100">Projects</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Social Media</h4>
          <ul className="mt-4">
            <li>
              <a href="http://twitter.com/JamesAsibeyManu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/jaamanu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jamesasibeymanu/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100">LinkedIn</a>
            </li>
            <li>
              <a href="https://medium.com/@jaamanu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100">Medium</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4">
        &copy; {new Date().getFullYear()} James Asibey Manu
      </div>
    </footer>
  );
};

export default Footer;
