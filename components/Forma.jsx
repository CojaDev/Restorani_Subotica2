'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Step1 from '@/components/Step1';
import Step2 from '@/components/Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import FormImage from './FormImage';
const Forma = () => {
  const [step, setStep] = useState(1);
  const [restoran, setRestoran] = useState({
    naziv: '',
    opis: '',
    vrsta: 'Restoran',
    brojTel: '',
    adresa: '',
    websajt: '',
    kordinate: [],
    vlasnik: '',
    imejl: '',
    slike: [],
    meni: [],
    radnoVreme: {
      monday: {
        otvaranje: '',
        zatvaranje: '',
      },
      tuesday: {
        otvaranje: '',
        zatvaranje: '',
      },
      wednesday: {
        otvaranje: '',
        zatvaranje: '',
      },
      thursday: {
        otvaranje: '',
        zatvaranje: '',
      },
      friday: {
        otvaranje: '',
        zatvaranje: '',
      },
      saturday: {
        otvaranje: '',
        zatvaranje: '',
      },
      sunday: {
        otvaranje: '',
        zatvaranje: '',
      },
    },
  });
  const nextStep = () => {
    console.log('Podaci poslati:', restoran);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6tdaeep',
        'template_h0ooydk',
        e.target,
        'qyKCjoIKW0Re6ObrA'
      )
      .then((res) => console.log(res));
    setStep(step + 1);
    console.log('Podaci poslati:', restoran);
  };

  return (
    <section className="w-full flex gap-1 mt-48 p-2 ">
      <FormImage img1="/novo.jpg" img2="/cta1.jpg" />

      <form
        className="flex sm:gap-2 flex-col gap-3 items-center border border-black rounded-b-3xl rounded-t-xl bg-white/50 dark:bg-white flex-1 p-2 sm:mx-0 mx-4"
        onSubmit={handleSubmit}
      >
        {step === 1 && (
          <Step1
            restoran={restoran}
            setRestoran={setRestoran}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <Step2
            restoran={restoran}
            setRestoran={setRestoran}
            nextStep={nextStep}
            prevStep={prevStep}
            setStep={setStep}
            step={step}
          />
        )}
        {step === 3 && (
          <Step3
            restoran={restoran}
            setRestoran={setRestoran}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <Step4
            restoran={restoran}
            setRestoran={setRestoran}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 5 && (
          <Step5
            restoran={restoran}
            setRestoran={setRestoran}
            prevStep={prevStep}
          />
        )}
        {step === 6 && <Step6 setStep={setStep} />}
      </form>
      <FormImage img1="/novo.jpg" img2="/cta1.jpg" />
    </section>
  );
};

export default Forma;
