type resprop = {
  restoran: any;
};
interface Jelo {
  naziv: string;
  opis: string;
  cenaMala: any;
  cenaVelika: number | null;
  slika: URL;
}
const Jelovnik = ({ restoran }: resprop) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4">
        {Object.keys(restoran.meni).map((category) => (
          <div key={category} className="flex flex-col gap-4">
            <h2 className="dark:text-white text-md mt-4 text-xl transition-all capitalize">
              {category}
            </h2>

            <div className="flex flex-wrap gap-4">
              {restoran.meni[category].map((jelo: Jelo) => (
                <div
                  key={jelo.naziv}
                  className="flex flex-col border-2 dark:border-white min-w-[335px] border-gray-950/50 p-2 overflow-hidden shadow-lg"
                >
                  {jelo.naziv ||
                  jelo.opis ||
                  jelo.cenaMala ||
                  jelo.cenaVelika ? (
                    <>
                      <div className="flex-shrink-0">
                        <img
                          src={`${jelo.slika || '/logo.png'}?${Math.random()}`}
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
                        {jelo.naziv && (
                          <p className="dark:text-white text-lg">
                            {jelo.naziv}
                          </p>
                        )}
                        {jelo.opis && (
                          <p className="dark:text-white opacity-70 dark:opacity-60 max-w-xs">
                            {jelo.opis}
                          </p>
                        )}
                        {(jelo.cenaMala === jelo.cenaVelika ||
                          jelo.cenaMala === null ||
                          jelo.cenaMala === '') && (
                          <div className="flex mt-auto mb-2">
                            <p className="dark:text-white font-semibold">
                              Cena: {jelo.cenaMala} RSD
                            </p>
                          </div>
                        )}
                        {jelo.cenaMala !== jelo.cenaVelika &&
                          jelo.cenaMala !== null &&
                          jelo.cenaMala !== '' && (
                            <div className="flex mt-auto mb-2">
                              <p className="dark:text-white font-semibold">
                                Mala Porcija {jelo.cenaMala} RSD
                              </p>
                              <p className="dark:text-white ml-auto font-semibold">
                                Velika Porcija {jelo.cenaVelika} RSD
                              </p>
                            </div>
                          )}
                      </div>
                    </>
                  ) : (
                    <div className="flex-shrink-0 ">
                      <a href={jelo.slika.toString()}>
                        <img
                          src={`${jelo.slika || '/logo.png'}?${Math.random()}`}
                          alt={jelo.naziv}
                          className="w-full h-full object-cover rounded-lg mx-auto min-w-[335px] max-w-[335px]"
                          onError={(e: any) => {
                            e.target.onerror = null;
                            e.target.src = `${'/logo.png'}?${Math.random()}`;
                            e.target.style.width = '128px';
                          }}
                        />
                      </a>
                    </div>
                  )}
                  {jelo.naziv ||
                  jelo.opis ||
                  jelo.cenaMala ||
                  jelo.cenaVelika ? (
                    <a
                      className="text-center p-2 border-2 border-orange-500 bg-orange-500 rounded-2xl mt-auto font-medium hover:bg-orange-500/80 transition-all"
                      href={`tel:${restoran.brojTel}`}
                    >
                      Naruči
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jelovnik;
