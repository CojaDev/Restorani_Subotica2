import { DISCOVERY } from '@/constants';
import Link from 'next/link';
const DiscoverSection = () => {
  return (
    <section className="flex-col items-center w-full mt-20 px-2">
      <div className="flex-between gap-4 w-full overflow-x-scroll scroll-none flex-wrap">
        {DISCOVERY.map((disc) => (
          <div
            key={disc.key}
            draggable="false"
            className="flex-center flex-col p-10 py-14 rounded-3xl bg-slate-600/40 flex-1 self-stretch bg-cover  bg-center bg-no-repeat bg-opacity-40 border-2 border-black/40 dark:border-white"
            style={{
              backgroundImage: `radial-gradient(circle at center, #141414, transparent 220px), url(${disc.slika})`,
            }}
          >
            <div className="flex-grow mb-2">
              <p className="text-white font-medium text-lg text-center mt-auto mb-2 ">
                {disc.naslov}
              </p>

              <p className="text-white opacity-90 text-sm text-center">
                {disc.desc}
              </p>
            </div>

            <Link
              href={disc.link}
              className="mt-auto self-center p-2 px-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all active:scale-95 hover:scale-105"
            >
              Pogledaj
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
