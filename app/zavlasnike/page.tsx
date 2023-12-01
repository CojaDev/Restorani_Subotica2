import ContactUs from '@/components/ContactUs';
import Features from '@/components/Features';

import Forma from '@/components/Forma.jsx';
import Steps from '@/components/Steps';

import Image from 'next/image';
import React from 'react';

const Restorani = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row w-full gap-2 p-2 sm:mt-0 mt-36">
        <div className=" px-2 max-w-lg sm:mt-16 mt-0">
          <h1 className="orange_gradient head_text2 p-2 font-semibold">
            Pridruži se
          </h1>
          <p className="dark:text-white p-2 pt-0 font-medium desc2 mb-1 ">
            Postanite deo naše ekskluzivne zajednice restorana i doživite
            neviđeni rast poslovanja.
          </p>
          <a
            href="#features"
            className="inline-block p-2 px-4 bg-black text-white dark:text-black dark:bg-white border hover:invert dark:border-black border-white transition-all rounded-3xl ml-1.5  font-medium dark:font-semibold"
          >
            Saznaj Više
          </a>
        </div>
        <div className="flex sm:flex-none flex-wrap justify-center sm:mt-0 mt-10  gap-4">
          <div className="relative w-52 h-52 sm:mx-0 mx-auto my-auto sm:flex hidden">
            <Image
              src="/juicy.jpg"
              alt="Image 1"
              draggable="false"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col ">
            <div className="relative w-52 h-52 sm:mx-0 mx-auto">
              <Image
                src="/novo.jpg"
                alt="Image 2"
                layout="fill"
                draggable="false"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-52 h-52 sm:mx-0 mx-auto mt-4">
              <Image
                src="/cta1.jpg"
                alt="Image 2"
                layout="fill"
                draggable="false"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="relative w-52 h-52 sm:mx-0 mx-auto my-auto sm:flex hidden">
            <Image
              src="/brzo.jpg"
              alt="Image 1"
              draggable="false"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <div id="features" />
      <Features />
      <Steps />
      <Forma />
      <ContactUs />
    </>
  );
};

export default Restorani;
