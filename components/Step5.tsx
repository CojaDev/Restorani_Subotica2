const Step5 = ({ restoran, setRestoran, prevStep }: any) => {
  return (
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
              <p className="select-none">I'm not a robot</p>
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
  );
};

export default Step5;
