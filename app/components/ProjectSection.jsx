'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: 'Payroll Management System',
    description:
      'This is a payroll management system. It consists majorly of two sections in Elements and ElementLinks. You can create, update, delete and see various elements details and equally create related Element Links. ',
    image: '/images/project1.png',
    tag: ["All", "Web"],
    gitUrl: 'https://github.com/uferekalu/payroll',
    previewUrl: 'https://kalu-ufere-softsuite-test.vercel.app/',
  },
  {
    id: 2,
    title: 'Hotel Booking UI',
    description: 'This is a UI for a hotel booking',
    image: '/images/project2.png',
    tag: ["All", "Web"],
    gitUrl: 'https://github.com/uferekalu/hotel_booking',
    previewUrl: 'https://hotel-booking-sepia.vercel.app/',
  },
  {
    id: 3,
    title: 'Employees Record',
    description:
      'This application is a good example of employees record that can be adopted by an organization to handle the record of its employees. It gives information about the employees regarding their names, date joined, role, level, country, their various departments in the organization and so much more.',
    image: '/images/project5.png',
    tag: ["All", "Mobile"],
    gitUrl: 'https://github.com/uferekalu/records',
    previewUrl: 'https://employees-hazel.vercel.app/',
  },
  {
    id: 4,
    title: 'Logistics Application',
    description:
      "The project is a Driving and Car Clearing App with NextJs and ReactJs. It's a comprehensive app with various modules as Driver dashboard, customer module, admin panel, agent module, clearing and forwarding module and lot more",
    image: '/images/project4.png',
    tag: ["All", "Web"],
    gitUrl: '/',
    previewUrl: 'https://monodome-frontend-new.vercel.app/',
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div id="projects" className="mt-10 md:mt-14">
      <h1 className="flex justify-center items-center p-3 text-lg font-semibold">
        My Projects
      </h1>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 bg-slate-600 p-5 rounded-lg">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
