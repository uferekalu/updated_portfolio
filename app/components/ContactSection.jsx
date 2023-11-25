import Link from 'next/link';
import React from 'react';

const ContactSection = () => {
  return (
    <div id="contacts" className="mt-3">
      <h1 className="flex justify-center items-center text-xl font-semibold">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-3 mt-3 gap-4">
        <div className="flex flex-col justify-center items-center py-5 border shadow-lg rounded-lg">
          <Link href={'https://twitter.com/lushak_tech'}>
            <i
              style={{
                fontSize: '30px',
              }}
              className="bi bi-twitter-x"
            ></i>
          </Link>
          <Link
            style={{
              fontSize: '12px',
            }}
            className="no-underline"
            href={'https://twitter.com/lushak_tech'}
          >
            https://twitter.com/lushak_tech
          </Link>
        </div>
        <div className="flex px-3 flex-col justify-center items-center py-5 border shadow-lg rounded-lg">
          <Link href={'https://www.linkedin.com/in/kalu-ufere-a5b0787a/'}>
            <i
              style={{
                fontSize: '30px',
              }}
              className="bi bi-linkedin"
            ></i>
          </Link>
          <Link
            style={{
              fontSize: '12px',
            }}
            className="no-underline text-center"
            href={'https://www.linkedin.com/in/kalu-ufere-a5b0787a/'}
          >
            https://www.linkedin.com/in/kalu-ufere-a5b0787a/
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-5 border shadow-lg rounded-lg">
          <Link href={'https://github.com/uferekalu'}>
            <i
              style={{
                fontSize: '30px',
              }}
              className="bi bi-github"
            ></i>
          </Link>
          <Link
            style={{
              fontSize: '12px',
            }}
            className="no-underline text-center"
            href={'https://github.com/uferekalu'}
          >
            https://github.com/uferekalu
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-5 border shadow-lg rounded-lg">
          <i
            style={{
              fontSize: '30px',
            }}
            className="bi bi-envelope-fill"
          ></i>
          <span className="text-xs">dekalusha@gmail.com</span>
        </div>
        <div className="flex flex-col justify-center items-center py-5 border shadow-lg rounded-lg">
          <i
            style={{
              fontSize: '30px',
            }}
            className="bi bi-telephone"
          ></i>
          <span className="text-xs">+2348130149426</span>
        </div>
        <div className="flex flex-col justify-center items-center py-5 border shadow-lg rounded-lg">
          <i
            style={{
              fontSize: '30px',
            }}
            className="bi bi-telegram"
          ></i>
          <span className="text-xs">@IntelligentProgrammer</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
