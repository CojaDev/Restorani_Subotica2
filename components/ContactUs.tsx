'use client';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import ContactInput from './ContactInput';
import { useState } from 'react';
import EmailSent from './EmailSent';

const ContactUs = () => {
  const [emailSent, setEmailSent] = useState(false);
  const EmailSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6tdaeep',
        'template_zmmvyfb',
        e.target,
        'qyKCjoIKW0Re6ObrA'
      )
      .then((res) => {
        console.log(res);
        setEmailSent(true);
      });
  };
  const reset = () => {
    setEmailSent(false);
  };
  return (
    <section className="w-screen flex justify-center items-center flex-col mt-52 p-2  relative  pt-20">
      <p className="text-4xl text-white font-semibold m-4 mt-10">
        Imaš Neko Pitanje?
      </p>
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
        {emailSent === false ? <ContactInput /> : <EmailSent reset={reset} />}
      </form>
    </section>
  );
};

export default ContactUs;
