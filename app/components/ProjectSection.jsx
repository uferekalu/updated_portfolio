import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Payroll Management System',
    description:
      'This is a payroll management system. It consists majorly of two sections in Elements and ElementLinks. You can create, update, delete and see various elements details and equally create related Element Links. ',
    image: '/images/project1.png',
    tag: ['All', 'web'],
    gitUrl: "https://github.com/uferekalu/payroll",
    previewUrl: "https://kalu-ufere-softsuite-test.vercel.app/",
  },
  {
    id: 2,
    title: 'Hotel Booking UI',
    description: 'This is a UI for a hotel booking',
    image: '/images/project2.png',
    tag: ['All', 'web'],
    gitUrl: "https://github.com/uferekalu/hotel_booking",
    previewUrl: "https://hotel-booking-sepia.vercel.app/",
  },
  {
    id: 3,
    title: 'Employees Record',
    description:
      'This application is a good example of employees record that can be adopted by an organization to handle the record of its employees. It gives information about the employees regarding their names, date joined, role, level, country, their various departments in the organization and so much more. The major highlights of the application include searching by name, id, role, sorting by their various levels and filtering to narrow the data to a particular employee details. Furthermore, pagination was implemented for ease of handling of data. This was developed by adopting TDD (Test-Driven Development) method and the stack used includes ReactJS, JavaScript, NextJS, NodeJS. The application can be improved by incorporating a state management application like Redux and that said, there was lots of prop-drilling to get data across to different components.',
    image: '/images/project3.png',
    tag: ['All', 'web'],
    gitUrl: "https://github.com/uferekalu/records",
    previewUrl: "https://employees-hazel.vercel.app/",
  },
  {
    id: 4,
    title: 'Logistics Application',
    description:
      "The project is a Driving and Car Clearing App with NextJs and ReactJs. It's a comprehensive app with various modules as Driver dashboard, customer module, admin panel, agent module, clearing and forwarding module and lot more",
    image: '/images/project4.png',
    tag: ['All', 'web'],
    gitUrl: "/",
    previewUrl: "https://monodome-frontend-new.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <div id='projects'>
      <h1 className='flex justify-center items-center p-3 text-lg font-semibold'>My Projects</h1>
      <div className='grid md:grid-cols-3 gap-10 bg-slate-600 p-5 rounded-lg'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
