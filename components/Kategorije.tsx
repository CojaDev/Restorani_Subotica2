import { KATEGORIJE } from '@/constants';
import Link from 'next/link';

const Kategorije = () => {
  return (
    <section className="flex-col w-full mt-60 px-2 overflow-hidden">
      <h4 className="text-black dark:text-white text-xl font-semibold float-left px-1.5 ">
        Kategorije
      </h4>
      <div className="py-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 w-full overflow-x-scroll gap-2 scroll-none ">
        {KATEGORIJE.map((kata) => (
          <div
            key={kata.key}
            className="w-full border border-black dark:border-white rounded-full hover:bg-black dark:bg-transparent dark:hover:bg-white flex-center transition-all active:scale-95  "
          >
            <Link
              href={`/restorani/kategorije/[kategorija]`}
              as={`/restorani/kategorije/${kata.key}`}
              draggable="false"
              className="w-full "
            >
              <p className="w-full text-center py-2 font-medium dark:text-white select-none text-base hover:text-white dark:hover:text-black transition-all">
                {kata.naziv}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kategorije;
