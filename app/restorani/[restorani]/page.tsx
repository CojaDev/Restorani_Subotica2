'use client';

import MyCustomImage from '@/components/MyCustomImage';
import Restoran404 from '@/components/Restoran404';
import RestoranBanner from '@/components/RestoranBanner';
import RestoranInfo from '@/components/RestoranInfo';
import { RERSTORANI } from '@/constants/restorani';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type nameprop = {
  params: any;
};
const RestoranPage = ({ params }: nameprop) => {
  const { restorani } = params;

  // Find the restoran object based on the 'naziv' parameter
  const restoran: any = RERSTORANI.find(
    (r) => r.naziv.replace(/\s+/g, '-') === restorani
  );

  if (!restoran) {
    return <Restoran404 />;
  }

  const [sectionTag, setSectionTag] = useState(1);

  function isValidURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  const handleDrag = (event: any) => {
    // Prevent default drag behavior
    event.preventDefault();

    // Apply pointer-events: none during drag
    event.target.style.pointerEvents = 'none';
  };
  return (
    <div className="flex-center flex-col w-full sm:mt-2 mt-24">
      <RestoranBanner restoran={restoran} />
      <RestoranInfo restoran={restoran} />

      <div className="bg-slate-400/30 dark:bg-slate-300/40 w-full flex mt-10 p-3 sm:p-1 rounded-md sm:flex-row  sm:gap-0 gap-y-2 ">
        <button
          className="p-2 dark:text-white bg-slate-400/40 dark:bg-slate-200/50 border-r-2 border-white/50 hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all uppercase sm:w-32 sm:flex-none flex-1  "
          onClick={() => {
            setSectionTag(1);
          }}
        >
          Jelovnik
        </button>
        <button
          className="p-2 dark:text-white bg-slate-400/40 dark:bg-slate-200/50 hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all  border-r-2 border-white/50 uppercase sm:w-32 sm:flex-none flex-1 "
          onClick={() => {
            setSectionTag(2);
          }}
        >
          Galerija
        </button>
        <button
          className="p-2 dark:text-white bg-slate-400/40 dark:bg-slate-200/50 hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all uppercase sm:w-32 sm:flex-none flex-1 border-r-2 border-white/50  "
          onClick={() => {
            setSectionTag(3);
          }}
        >
          Mapa
        </button>
        <button
          className="p-2 dark:text-white bg-slate-400/40 dark:bg-slate-200/50 hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all   uppercase sm:w-32 sm:flex-none flex-1"
          onClick={() => {
            setSectionTag(4);
          }}
        >
          Utisci
        </button>
      </div>
      <div className="bg-slate-400/30 dark:bg-slate-300/40 w-full p-5 pt-2 mt-5 rounded-md">
        {sectionTag === 1 && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4">
              {Object.keys(restoran.meni).map((category) => (
                <div key={category} className="flex flex-col gap-4">
                  <h2 className="dark:text-white text-md mt-4 text-xl transition-all capitalize">
                    {category}
                  </h2>

                  <div className="flex flex-wrap gap-4">
                    {restoran.meni[category].map((jelo: any) => (
                      <div
                        key={jelo.naziv}
                        className="flex flex-col border-2 dark:border-white border-gray-950/50 p-2 overflow-hidden shadow-lg"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={`${
                              jelo.slika || '/logo.png'
                            }?${Math.random()}`}
                            alt={jelo.naziv}
                            width={100}
                            height={100}
                            draggable="false"
                            loading="lazy"
                            className={`${
                              jelo.slika ? 'w-full' : 'w-32'
                            } h-32 object-cover rounded-lg mx-auto`}
                            onError={(e: any) => {
                              e.target.onerror = null;
                              e.target.src = `${'/logo.png'}?${Math.random()}`;
                              e.target.style.width = '128px';
                            }}
                          />
                        </div>
                        <div className="flex flex-col max-w-xs mt-2 h-full">
                          <p className="dark:text-white text-lg">
                            {jelo.naziv}
                          </p>
                          <p className="dark:text-white opacity-70 dark:opacity-60 max-w-xs">
                            {jelo.opis}
                          </p>
                          {jelo.cenaMala === jelo.cenaVelika ? (
                            <div className="flex my-auto">
                              <p className="dark:text-white font-semibold">
                                Cena: {jelo.cenaMala} RSD
                              </p>
                            </div>
                          ) : (
                            <div className="flex my-auto">
                              <p className="dark:text-white font-semibold">
                                Mala Porcija {jelo.cenaMala} RSD
                              </p>
                              <p className="dark:text-white ml-auto font-semibold">
                                Velika Porcija {jelo.cenaVelika} RSD
                              </p>
                            </div>
                          )}
                        </div>
                        <a
                          className="text-center p-2 border-2 border-orange-500 bg-orange-500 rounded-2xl mt-auto font-medium"
                          href={`tel:${restoran.brojTel}`}
                        >
                          Naruči
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {sectionTag === 2 && (
          <div className="w-full">
            {/* Section for restaurant images */}
            <div className="mb-8">
              <h3 className="dark:text-white text-lg mb-2">Restoran</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {restoran.slike.map((img: any, index: any) => (
                  <img
                    key={index}
                    src={img}
                    className={`w-full h-40 object-cover rounded-md ${
                      isValidURL(img) ? '' : 'hidden'
                    }`}
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none'; // Hide the image if the URL is invalid
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Section for images from all foods */}
            <div>
              <h3 className="dark:text-white text-lg mb-2">Hrana</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(restoran.meni).flatMap((category: any) =>
                  category.map((jelo: any) => (
                    <img
                      key={jelo.naziv}
                      src={jelo.slika}
                      className={`w-full h-40 object-cover rounded-md ${
                        isValidURL(jelo.slika) ? '' : 'hidden'
                      }`}
                      onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none'; // Hide the image if the URL is invalid
                      }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
        {sectionTag === 3 && (
          <div className="mapa relative ">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0, userSelect: 'none', padding: '2px' }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${restoran.kordinate[1]},${restoran.kordinate[0]},${restoran.kordinate[1]},${restoran.kordinate[0]}&amp;layer=mapnik&zoom=18&zoomcontrol=0&scalecontrol=0`}
              allowFullScreen
              draggable="false"
              sandbox="allow-scripts"
            ></iframe>
            <Image
              src="/marker.png"
              alt="marker"
              className="absolute top-2/4 left-2/4 z-50 -translate-x-2/4  -translate-y-2/4"
              width={35}
              height={40}
              draggable="false"
            />
          </div>
        )}

        {sectionTag === 4 && <h2 className="dark:text-white">Utisci</h2>}
      </div>
    </div>
  );
};

export default RestoranPage;
