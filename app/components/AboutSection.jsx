'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const skillsData = [
  'React.js',
  'Node.js',
  'Express.js',
  'Nest.js',
  'Typescript',
  'MongoDB',
  'Docker',
  'TailwindCSS',
  'Material-ui',
  'PostgreSQL',
  'Next.js',
  'Kubernates',
  'MySQL',
];

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="block sm:flex gap-3 pt-0">
        <ul className="grid grid-cols-2 list-disc px-5">
          {skillsData.map((skill, index) => (
            <li
              style={{
                fontSize: '12px',
              }}
              key={index}
              className="text-sm mr-7"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc px-5">
        <li
          style={{
            fontSize: '12px',
          }}
          className="text-sm"
        >
          Mechanical Engineering
        </li>
        <li
          style={{
            fontSize: '12px',
          }}
          className="text-sm"
        >
          Federal Polytechnic Nekede Owerri
        </li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc px-5">
        <li
          style={{
            fontSize: '12px',
          }}
          className="text-sm"
        >
          Development of Ecommerce Applications
        </li>
        <li
          style={{
            fontSize: '12px',
          }}
          className="text-sm"
        >
          Development of Logistics Applications
        </li>
        <li
          style={{
            fontSize: '12px',
          }}
          className="text-sm"
        >
          Development of Academic related Applications
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <Image
              src={'/images/about.jpeg'}
              alt="about-pic"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mt-40 lg:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl mt-4 sm:mt-0 font-bold mb-4">About Me</h2>
          <p
            style={{
              fontSize: '12px',
            }}
            className=" md:text-lg text-justify"
          >
            {' '}
            I am a Full Stack JavaScript Developer with years of experience in
            developing and transfering product ideas to real application by
            adopting industrial standards that aid in scalability and
            maintenance of the application. I have great passion in getting
            optimal results by executing my tasks within the designated
            timeframe and I am equally teachable and always willing to learn and
            welcome ideas.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Exprience
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
