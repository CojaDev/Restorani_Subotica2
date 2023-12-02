import { DANI } from '@/constants';
const Step2 = ({ restoran, setRestoran, prevStep, setStep, step }: any) => {
  return (
    <>
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-medium mb-2 text-center">Radno Vreme</h2>
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
          console.log(restoran);
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
  );
};

export default Step2;
