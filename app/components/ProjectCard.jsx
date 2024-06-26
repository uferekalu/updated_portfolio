import Link from 'next/link';
import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="">
      <div
        style={title === "Quicksearch App" ? {
          background: `url(${imgUrl}) center center/cover no-repeat`,
        } :{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
        }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        <div className="overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-[#f9f6f6] py-6 px-4">
        <h5 className="text-sm font-semibold mb-2">{title}</h5>
        <p
          style={{
            fontSize: '11px',
          }}
          className="text-justify"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
