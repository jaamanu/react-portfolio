import React from 'react'
import WorkItem from "./WorkItem"

const data = [
    {
        year: 2003,
        company: 'Coca-cola Bottling Ltd Ghana',
        title: 'Laboratory Technician',
        duration: '2 years',
        details: 'Laboratory Technicain responsible for sample analysis, quality assurance and managing of production line'
    },
    {
        year: 2012,
        company: 'DBE',
        title: 'Deputy Principal',
        duration: '8 years',
        details: 'Led school professional development activities which is helpful soft skill needed by Web Development professionals as a good collaborator and team leader in group projects.'
    },
    {
        year: 2022,
        company: 'Microverse',
        title: 'Mentor',
        duration: '1 years',
        details: 'Mentored Junior web developers, providing technical support through code reviews,proposed improvements to code organization to improve code quality and overall performance, and provided advice and tips on how to maintain motivation to maintain longevity in the program.'
    }
    
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experience</h1>
      {data.map((item, idx) =>(
        <WorkItem key={idx} year={item.year} company={item.company} title={item.title} duration={item.duration} details={item.details}
        />
      ))}
    </div>
  )
}

export default Work
