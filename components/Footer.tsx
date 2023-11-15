import { FOOTER, SOCIALS } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="p-5 pb-0 bg-black/70 dark:bg-transparent flex-center flex-col dark:border-t dark:border-white w-screen  m-0 mt-36  overflow-hidden "
      style={{
        backgroundImage: `radial-gradient(circle at right center, #131313, transparent 1580px),radial-gradient(circle at left center, #131313, transparent 1580px)`,
      }}
    >
      <div className="flex w-full py-16 max-w-7xl mx-auto sm:px-16 px-0 flex-wrap">
        <div className="flex flex-col p-2   flex-auto sm:flex-1 ">
          <h4 className="text-white text-3xl">
            Restorani <p className="orange_gradient">Subotica</p>
          </h4>
          <div className="w-[17%] h-1 bg-orange-400 mb-4 mt-3" />
          <p className="text-white">
            Otkrijte najbolje ukuse grada uz našu ekskluzivnu selekciju
            restorana i jelovnika. Vaše gastronomsko putovanje počinje ovde.
          </p>
          <div className="socials flex justify-evenly items-center">
            {SOCIALS.map((social, index) => (
              <div key={index} draggable="false" className="flex flex-1  mt-3 ">
                {social.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.link} className="p-2 pl-0">
                    <Image
                      src={link.img}
                      alt={social.title}
                      width={40}
                      height={40}
                      className="invert"
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-2 flex-1 ">
          <h4 className="text-white text-xl">{FOOTER[0].title}</h4>
          <div className="w-[17%] h-1 bg-orange-400 mb-4 mt-3" />
          {FOOTER[0].links.map((link, linkIndex) => (
            <Link
              key={linkIndex}
              href={link.link}
              className="m-2 ml-0 text-white"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex flex-col p-2 flex-1">
          <h4 className="text-white text-xl">{FOOTER[1].title}</h4>
          <div className="w-[17%] h-1 bg-orange-400 mb-4 mt-3" />

          {FOOTER[1].links.map((link, linkIndex) => (
            <Link
              key={linkIndex}
              href={link.link}
              className="m-2 ml-0 text-white"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/40 w-full flex-between p-8 max-w-7xl mx-auto sm:px-16 px-0">
        <p className="text-white">
          © Copyright Restorani Subotica. All Rights Reserved
        </p>
        <p className="text-white">
          Designed by{' '}
          <a
            href="https://github.com/CojaDev"
            target="blank"
            className="orange_gradient font-medium hover:saturate-200 transition-all hover:brightness-125"
          >
            CojaDev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
