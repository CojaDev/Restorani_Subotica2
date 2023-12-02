import { KATEGORIJE } from '@/constants';
const Step1 = ({ restoran, setRestoran, nextStep }: any) => {
  return (
    <>
      <h1 className="text-center text-3xl font-medium my-9 mb-1">
        Unesi Svoj Restoran
      </h1>
      <div className="flex flex-col max-w-xs mb-2">
        <input
          type="text"
          name="naziv"
          placeholder="Naziv Restorana"
          className="text-md p-2 border border-black focus:outline-0 rounded-lg mb-2"
          value={restoran.naziv}
          onChange={(e) => setRestoran({ ...restoran, naziv: e.target.value })}
          required
        />
        <textarea
          name="orestoranu"
          placeholder="O Restoranu"
          className="text-md p-2 border border-black focus:outline-0 rounded-lg min-h-[100px]"
          value={restoran.opis}
          onChange={(e) => setRestoran({ ...restoran, opis: e.target.value })}
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
          onChange={(e) => setRestoran({ ...restoran, vrsta: e.target.value })}
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
          onChange={(e) => setRestoran({ ...restoran, adresa: e.target.value })}
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
  );
};

export default Step1;
