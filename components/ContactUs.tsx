'use client';
import Image from 'next/image';
import React from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const EmailSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6tdaeep',
        'template_zmmvyfb',
        e.target,
        'qyKCjoIKW0Re6ObrA'
      )
      .then((res) => console.log(res));
  };
  return (
    <section className="w-screen flex justify-center items-center flex-col mt-52 p-2  relative  pt-20">
      <h4 className="text-4xl text-white font-semibold m-4 mt-10">
        Imaš Neko Pitanje?
      </h4>
      <Image
        src="/restoran2.jpg"
        alt="restoran"
        className="absolute top-0 object-cover w-screen h-[80%] z-[-1] brightness-50"
        width={500}
        height={200}
      />
      <form
        onSubmit={EmailSubmit}
        className=" bg-white border border-black flex flex-col gap-4 p-10 shadow-2xl rounded-b-2xl rounded-t-lg"
      >
        <div className="flex sm:flex-row flex-col gap-4">
          <input
            type="text"
            name="ime"
            placeholder="Unesi Ime"
            className="p-2 border border-black focus:outline-orange-400/90 rounded-[4px] focus:shadow-md transition-all  delay-75"
            required
          />
          <input
            type="text"
            name="prezime"
            placeholder="Unesi Prezime"
            className="p-2 border border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Unesi Email"
          className="p-2 border border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
          required
        />
        <input
          type="text"
          name="naslov"
          placeholder="Unesi Naslov"
          className="p-2 border border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
          required
        />
        <textarea
          placeholder="Poruka..."
          name="poruka"
          className="p-2 border min-h-[150px] max-h-[280px] border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
          required
        />
        <input
          type="submit"
          value="Pošalji"
          className="p-2 border border-black bg-orange-400 hover:bg-orange-400/80 cursor-pointer  transition-all active:scale-[0.98] font-medium rounded-[4px]"
        />
      </form>
    </section>
  );
};

export default ContactUs;
