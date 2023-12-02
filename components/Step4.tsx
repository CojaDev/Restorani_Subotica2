const Step4 = ({ restoran, setRestoran, nextStep, prevStep }: any) => {
  return (
    <>
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-medium mb-2 text-center">Jelovnik</h2>

        <div className="flex flex-col mb-2">
          {Object.entries(restoran.meni).map(
            ([kategorija, jela]: any, index: any) => (
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
                {jela.map((jelo: any, jeloIndex: any) => (
                  <div key={jeloIndex} className="flex-center  flex-col mb-2">
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
  );
};

export default Step4;
