'use client';
import { KATEGORIJE, DANI } from '@/constants';
import { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
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
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
    emailjs
      .sendForm(
        'service_6tdaeep',
        'template_h0ooydk',
        e.target,
        'qyKCjoIKW0Re6ObrA'
      )
      .then((res) => console.log(res));
    console.log('Podaci poslati:', restoran);
  };

  return (
    <section className="w-full flex gap-1 mt-48 p-2 ">
      <div className="flex-1 lg:flex hidden">
        <div className="flex flex-col gap-3 flex-1 my-auto">
          <div className="relative lg:w-64 lg:h-64 h-48 w-48 mx-auto">
            <Image
              src="/novo.jpg"
              alt="Image 2"
              layout="fill"
              draggable="false"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative lg:w-64 lg:h-64 h-48 w-48 mx-auto">
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
        className="flex sm:gap-2 flex-col gap-3 items-center border border-black rounded-b-3xl rounded-t-xl bg-white/50 dark:bg-white/80 flex-1 p-2 sm:mx-0 mx-4"
        onSubmit={handleSubmit}
      >
        {step === 1 && (
          <h1 className="text-center text-3xl font-medium my-9 mb-1">
            Unesi Svoj Restoran
          </h1>
        )}
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
                  <option value={kategorija.naziv} key={kategorija.key}>
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
              <h2 className="text-2xl font-medium mb-2 text-center">
                Radno Vreme
              </h2>
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
                      required
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
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="px-6 py-2 bg-black hover:bg-black/70 rounded-3xl text-white -mb-0.5 transition-all"
              onClick={() => {
                setStep(step + 1);
                setRestoran({
                  ...restoran,
                  slike: [...restoran.slike, ''],
                });
              }}
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
        {step === 3 && (
          <>
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-medium mb-2 text-center">
                Slike Restorana
              </h2>

              <div className="flex flex-col mb-2">
                {restoran.slike.map((slika, index) => (
                  <div
                    key={index}
                    className="flex-center sm:flex-row flex-col mb-2"
                  >
                    {slika && (
                      <img
                        src={slika}
                        loading="lazy"
                        alt={`${index + 1}`}
                        className="w-16 h-16 object-cover rounded-lg mr-2"
                      />
                    )}
                    <input
                      type="url"
                      name={`slika-${index}`}
                      placeholder={`Slika ${index + 1}`}
                      className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 mr-2"
                      value={slika}
                      onChange={(e) => {
                        const updatedSlike = [...restoran.slike];
                        updatedSlike[index] = e.target.value;
                        setRestoran({ ...restoran, slike: updatedSlike });
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updatedSlike = [...restoran.slike];
                        updatedSlike.splice(index, 1);
                        setRestoran({ ...restoran, slike: updatedSlike });
                      }}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg max-h-[32px]"
                    >
                      Obrisi
                    </button>
                  </div>
                ))}
                <div className="flex mb-2 justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      setRestoran({
                        ...restoran,
                        slike: [...restoran.slike, ''],
                      })
                    }
                    className="px-3 py-1 bg-green-500 text-white rounded-lg"
                  >
                    Dodaj Sliku
                  </button>
                </div>
              </div>
            </div>
            <button
              className="px-6 py-2 mt-auto bg-black hover:bg-black/70 rounded-3xl text-white -mb-0.5 transition-all"
              onClick={nextStep}
            >
              Nastavi
            </button>
            <button
              className="px-3.5 py-1 hover:text-black/70 border border-black hover:border-black/70 text-sm rounded-3xl mb-2 transition-all"
              onClick={prevStep}
            >
              Nazad
            </button>
          </>
        )}
        {step === 4 && (
          <>
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-medium mb-2 text-center">
                Jelovnik
              </h2>

              <div className="flex flex-col mb-2">
                {Object.entries(restoran.meni).map(
                  ([kategorija, jela], index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center mb-2">
                        <input
                          type="text"
                          name={`kategorija-${index}`}
                          placeholder="Naziv kategorije"
                          className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2"
                          value={kategorija}
                          onChange={(e) => {
                            const updatedMeni = { ...restoran.meni };
                            delete updatedMeni[kategorija];
                            updatedMeni[e.target.value] = jela;
                            setRestoran({ ...restoran, meni: updatedMeni });
                          }}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedMeni = { ...restoran.meni };
                            delete updatedMeni[kategorija];
                            setRestoran({ ...restoran, meni: updatedMeni });
                          }}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg ml-2"
                        >
                          Obrisi Kategoriju
                        </button>
                      </div>
                      {jela.map((jelo, jeloIndex) => (
                        <div
                          key={jeloIndex}
                          className="flex-center  flex-col mb-2"
                        >
                          {jelo.slika && (
                            <img
                              src={jelo.slika}
                              loading="lazy"
                              alt={`Slika ${jeloIndex + 1}`}
                              className="w-16 h-16 object-cover rounded-lg mr-2"
                            />
                          )}
                          <input
                            type="url"
                            name={`slika-${jeloIndex}`}
                            placeholder={`Slika ${jeloIndex + 1}`}
                            className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 mr-2"
                            value={jelo.slika}
                            onChange={(e) => {
                              const updatedJela = [...jela];
                              updatedJela[jeloIndex] = {
                                ...jelo,
                                slika: e.target.value,
                              };
                              const updatedMeni = { ...restoran.meni };
                              updatedMeni[kategorija] = updatedJela;
                              setRestoran({ ...restoran, meni: updatedMeni });
                            }}
                            required
                          />
                          <input
                            type="text"
                            name={`Naziv Jela-${jeloIndex}`}
                            placeholder={`Naziv Jela ${jeloIndex + 1}`}
                            className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 mr-2"
                            value={jelo.naziv}
                            onChange={(e) => {
                              const updatedJela = [...jela];
                              updatedJela[jeloIndex] = {
                                ...jelo,
                                naziv: e.target.value,
                              };
                              const updatedMeni = { ...restoran.meni };
                              updatedMeni[kategorija] = updatedJela;
                              setRestoran({ ...restoran, meni: updatedMeni });
                            }}
                            required
                          />
                          <input
                            type="text"
                            name={`opis-${jeloIndex}`}
                            placeholder={`Opis ${jeloIndex + 1}`}
                            className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 mr-2"
                            value={jelo.opis}
                            onChange={(e) => {
                              const updatedJela = [...jela];
                              updatedJela[jeloIndex] = {
                                ...jelo,
                                opis: e.target.value,
                              };
                              const updatedMeni = { ...restoran.meni };
                              updatedMeni[kategorija] = updatedJela;
                              setRestoran({ ...restoran, meni: updatedMeni });
                            }}
                            required
                          />
                          <div className="flex gap-2 justify-center">
                            <input
                              type="text"
                              name={`CenaMalePorcije-${jeloIndex}`}
                              placeholder={`Cena Male Porcije ${jeloIndex + 1}`}
                              className="text-md p-2 border w-2/6 border-black focus:outline-0 rounded-lg mb-2 mr-2"
                              value={jelo.cenaMala}
                              onChange={(e) => {
                                const updatedJela = [...jela];
                                updatedJela[jeloIndex] = {
                                  ...jelo,
                                  cenaMala: e.target.value,
                                };
                                const updatedMeni = { ...restoran.meni };
                                updatedMeni[kategorija] = updatedJela;
                                setRestoran({ ...restoran, meni: updatedMeni });
                              }}
                              required
                            />
                            <input
                              type="text"
                              name={`CenaVelikePorcije-${jeloIndex}`}
                              placeholder={`Cena Velike Porcije `}
                              className="text-md p-2 border w-2/6 border-black focus:outline-0 rounded-lg mb-2 mr-2"
                              value={jelo.cenaVelika}
                              onChange={(e) => {
                                const updatedJela = [...jela];
                                updatedJela[jeloIndex] = {
                                  ...jelo,
                                  cenaVelika: e.target.value,
                                };
                                const updatedMeni = { ...restoran.meni };
                                updatedMeni[kategorija] = updatedJela;
                                setRestoran({ ...restoran, meni: updatedMeni });
                              }}
                              required
                            />
                          </div>
                          {/* Add fields for other properties of 'jelo' (naziv, opis, cenaMala, cenaVelika) here */}
                          <button
                            type="button"
                            onClick={() => {
                              const updatedJela = [...jela];
                              updatedJela.splice(jeloIndex, 1);
                              const updatedMeni = { ...restoran.meni };
                              updatedMeni[kategorija] = updatedJela;
                              setRestoran({ ...restoran, meni: updatedMeni });
                            }}
                            className="px-3 py-1 bg-red-500 text-white rounded-lg max-h-[32px]"
                          >
                            Obrisi
                          </button>
                        </div>
                      ))}
                      <div className="flex mb-2 justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            const updatedMeni = { ...restoran.meni };
                            updatedMeni[kategorija] = [
                              ...jela,
                              {
                                naziv: '',
                                tip: kategorija,
                                opis: '',
                                cenaMala: 0,
                                cenaVelika: 0,
                                slika: '',
                              },
                            ];
                            setRestoran({ ...restoran, meni: updatedMeni });
                          }}
                          className="px-3 py-1 bg-green-500 text-white rounded-lg"
                        >
                          Dodaj Jelo
                        </button>
                      </div>
                    </div>
                  )
                )}
                <div className="flex mb-2 justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      const updatedMeni = { ...restoran.meni };
                      const novaKategorija = `NovaKategorija ${
                        Object.keys(updatedMeni).length
                      }`;
                      updatedMeni[novaKategorija] = [];
                      setRestoran({ ...restoran, meni: updatedMeni });
                    }}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg"
                  >
                    Dodaj Kategoriju
                  </button>
                </div>
              </div>
            </div>

            <button
              className="px-6 py-2 mt-auto bg-black hover:bg-black/70 rounded-3xl text-white -mb-0.5 transition-all"
              onClick={nextStep}
            >
              Nastavi
            </button>
            <button
              className="px-3.5 py-1 hover:text-black/70 border border-black hover:border-black/70 text-sm rounded-3xl mb-2 transition-all"
              onClick={prevStep}
            >
              Nazad
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-medium mb-3 text-center">
                Unesite Vaše Podatke
              </h2>

              <div className="flex flex-col mb-2">
                <div className="flex-center flex-col mb-2">
                  <input
                    type="text"
                    name="ime"
                    placeholder="Vaše Ime"
                    className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-3 mr-2 w-full"
                    value={restoran.vlasnik}
                    onChange={(e) =>
                      setRestoran({ ...restoran, vlasnik: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Vaš Email"
                    className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 mr-2 w-full"
                    value={restoran.imejl}
                    onChange={(e) =>
                      setRestoran({ ...restoran, imejl: e.target.value })
                    }
                    required
                  />
                  <textarea
                    name="restoran"
                    placeholder="Vaš Restoran"
                    className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2 mr-2 w-full opacity-0 pointer-events-none h-1"
                    value={JSON.stringify(restoran)}
                    readOnly // Make the input read-only so users can't modify it
                    required
                  />

                  <div className=" w-full flex items-center gap-3 p-6 py-6 border-2 bg-white border-slate-200 mt-7">
                    <input
                      type="checkbox"
                      name="robot"
                      id="robot"
                      className="w-7 h-7 "
                      required
                    />
                    <p>I'm not a robot</p>
                  </div>
                </div>
              </div>
            </div>
            <input
              type="submit"
              className="px-6 py-2 mt-auto bg-black hover:bg-black/70 rounded-3xl text-white -mb-0.5 transition-all"
              value="Dodaj"
            />

            <button
              className="px-3.5 py-1 hover:text-black/70 border border-black hover:border-black/70 text-sm rounded-3xl mb-2 transition-all"
              onClick={prevStep}
            >
              Nazad
            </button>
          </>
        )}
        {step === 6 && (
          <>
            <div className="flex flex-col mt-6">
              <h2 className="text-2xl font-medium mb-3 text-center">
                Uspesno ste dodali Restoran
              </h2>

              <div className="flex flex-col mb-2">
                <div className="flex-center flex-col mb-5 gap-4 mt-6">
                  <Image
                    src="/checkmark.png"
                    alt="checkmark"
                    width={100}
                    height={100}
                  />
                  <h4 className="max-w-xs text-center">
                    Naš tim će pažljivo pregledati pružene informacije. Ukoliko
                    su svi podaci tačni i kompletni, restoran će biti objavljen
                    u narednim danima.
                  </h4>
                </div>
              </div>
            </div>

            <button
              className="px-6 py-2 mt-auto mb-7 bg-black hover:bg-black/70 rounded-3xl text-white  transition-all"
              onClick={() => {
                setStep(1);
              }}
            >
              Završi
            </button>
          </>
        )}
      </form>
      <div className="lg:flex hidden flex-1">
        <div className="flex flex-col gap-3 flex-1 my-auto">
          <div className="relative lg:w-64 lg:h-64 h-48 w-48 mx-auto">
            <Image
              src="/novo.jpg"
              alt="Image 2"
              layout="fill"
              draggable="false"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative lg:w-64 lg:h-64 h-48 w-48 mx-auto">
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
