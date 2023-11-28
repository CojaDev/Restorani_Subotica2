'use client';
import { KATEGORIJE, DANI, DANISRP } from '@/constants';
import { useState } from 'react';
import Image from 'next/image';

const Forma = () => {
  const [step, setStep] = useState(1);
  const [restoran, setRestoran] = useState({
    naziv: '',
    opis: '',
    vrsta: '',
    brojTel: '',
    adresa: '',
    websajt: '',
    kordinate: [],
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

    console.log('Podaci poslati:', restoran);
  };

  return (
    <section className="w-full flex mt-24 p-2 ">
      <div className="flex-1 sm:flex hidden">
        <div className="flex flex-col flex-1 my-auto">
          <div className="relative w-64 h-64   mx-auto">
            <Image
              src="/novo.jpg"
              alt="Image 2"
              layout="fill"
              draggable="false"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-64 h-64   mx-auto mt-4">
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
      </div>
      <form
        className="flex sm:gap-2 flex-col gap-3 items-center border border-black rounded-2xl bg-white/50 flex-1 p-2 sm:mx-0 mx-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-medium my-9 mb-1">
          Unesi Svoj Restoran
        </h1>
        {step === 1 && (
          <>
            <div className="flex flex-col max-w-xs mb-2">
              <input
                type="text"
                name="naziv"
                placeholder="Naziv Restorana"
                className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2"
                value={restoran.naziv}
                onChange={(e) =>
                  setRestoran({ ...restoran, naziv: e.target.value })
                }
                required
              />
              <textarea
                name="orestoranu"
                placeholder="O Restoranu"
                className="text-md p-2 border border-black focus:outline-0 rounded-lg min-h-[100px]"
                value={restoran.opis}
                onChange={(e) =>
                  setRestoran({ ...restoran, opis: e.target.value })
                }
                required
              />
            </div>

            <div className="flex flex-col mb-2 ">
              <label htmlFor="kategorija" className="mb-2 text-md">
                Kategorija:
              </label>
              <select
                name="kategorija"
                className="text-md p-2 border border-black focus:outline-0 min-w-[190px] rounded-lg mb-2 w-full"
                value={restoran.vrsta}
                onChange={(e) =>
                  setRestoran({ ...restoran, vrsta: e.target.value })
                }
                required
              >
                {KATEGORIJE.map((kategorija) => (
                  <option value={kategorija.key} key={kategorija.key}>
                    {kategorija.naziv}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col max-w-xs">
              <input
                type="tel"
                name="broj"
                placeholder="Broj Telefona"
                className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2"
                value={restoran.brojTel}
                onChange={(e) =>
                  setRestoran({ ...restoran, brojTel: e.target.value })
                }
                required
              />
              <input
                type="tel"
                name="web"
                placeholder="Web Stranica"
                className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2"
                value={restoran.websajt}
                onChange={(e) =>
                  setRestoran({ ...restoran, websajt: e.target.value })
                }
                required
              />

              <input
                type="text"
                name="adresa"
                placeholder="Adresa"
                className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2"
                value={restoran.adresa}
                onChange={(e) =>
                  setRestoran({ ...restoran, adresa: e.target.value })
                }
                required
              />
            </div>
            <button
              className="px-5 py-2 bg-black hover:bg-black/70 rounded-3xl text-white mb-2 transition-all"
              onClick={nextStep}
            >
              Nastavi
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <div className="flex flex-col mt-4">
              <h2 className="text-xl font-medium mb-2">Radno Vreme</h2>
              {DANI.map((dani) => (
                <div key={dani.dan} className="flex flex-col mb-2">
                  <label className="text-md mb-1">{dani.danSrp}:</label>
                  <div className="flex ">
                    <input
                      type="time"
                      name={`otvaranje-${dani.dan}`}
                      placeholder="Otvaranje"
                      className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 mr-2  "
                      value={restoran.radnoVreme[dani.dan].otvaranje}
                      onChange={(e) =>
                        setRestoran({
                          ...restoran,
                          radnoVreme: {
                            ...restoran.radnoVreme,
                            [dani.dan]: {
                              ...restoran.radnoVreme[dani.dan],
                              otvaranje: e.target.value,
                            },
                          },
                        })
                      }
                    />
                    <input
                      type="time"
                      name={`zatvaranje-${dani.dan}`}
                      placeholder="Zatvaranje"
                      className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 "
                      value={restoran.radnoVreme[dani.dan].zatvaranje}
                      onChange={(e) =>
                        setRestoran({
                          ...restoran,
                          radnoVreme: {
                            ...restoran.radnoVreme,
                            [dani.dan]: {
                              ...restoran.radnoVreme[dani.dan],
                              zatvaranje: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="px-6 py-2 bg-black hover:bg-black/70 rounded-3xl text-white -mb-0.5 transition-all"
              onClick={nextStep}
            >
              Nastavi
            </button>
            <button
              className="px-3.5 py-1 hover:text-black/70 border border-black hover:border-black/70 text-sm    rounded-3xl   mb-2 transition-all"
              onClick={prevStep}
            >
              Nazad
            </button>
          </>
        )}
      </form>
      <div className=" sm:flex hidden flex-1">
        <div className="flex flex-col flex-1 my-auto">
          <div className="relative w-64 h-64   mx-auto">
            <Image
              src="/novo.jpg"
              alt="Image 2"
              layout="fill"
              draggable="false"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-64 h-64   mx-auto mt-4">
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
      </div>
    </section>
  );
};

export default Forma;
