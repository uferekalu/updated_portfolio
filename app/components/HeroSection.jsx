'use client';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import fileDownload from 'js-file-download';
import path from 'path'

const HeroSection = () => {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch('http://localhost:5000/download-pdf');

      if (response.ok) {
        // Create a Blob from the response data
        const blob = await response.blob();

        // Create a link element
        const link = document.createElement('a');

        // Set the download attribute with the desired file name
        link.download = 'cv.pdf';

        // Create a URL for the Blob and set it as the link's href
        link.href = URL.createObjectURL(blob);

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      } else {
        console.error('Error downloading PDF:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-7 -mt-5 sm:mt-0">
        <div className="col-span-8 sm:text-left">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {"Hi, I'm"}{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Ufere Kalu',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'A Full Stack JavaScript Developer',
                1000,
                'Proficient In Database Design and Analysis',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '30px', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-600 sm:text-justify text-base sm:text-lg lg:text-xl mb-6">
            Experienced Full Stack JavaScript Developer with a track record of
            building and delivering intuitive and user-friendly web applications
            by adopting agile development methodology for ease of meeting
            customer satisfaction
          </p>
          {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
            Hire Me
          </button> */}
          <button
            onClick={handleDownloadCV}
            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 hover:text-white text-white border border-black mt-4"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-slate-200 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className="rounded-full absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={'/images/pic.jpg'}
              alt="pic"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
