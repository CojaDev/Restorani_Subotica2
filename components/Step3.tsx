const Step3 = ({ restoran, setRestoran, nextStep, prevStep }: any) => {
  return (
    <>
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-medium mb-2 text-center">
          Slike Restorana
        </h2>

        <div className="flex flex-col mb-2">
          {restoran.slike.map((slika: any, index: any) => (
            <div key={index} className="flex-center sm:flex-row flex-col mb-2">
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
  );
};

export default Step3;
