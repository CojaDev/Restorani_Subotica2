import Link from 'next/link';
type CTAProp = {
  naslov: string;
  text: string;
  slika: string;
  link: string;
  btn: string;
};
const CTASection = ({ naslov, text, slika, link, btn }: CTAProp) => {
  return (
    <section className="flex p-2 w-full mt-10 sm:mt-28">
      <div
        className="flex flex-col w-full flex-center rounded-3xl border-2 border-black dark:border-white p-20 sm:p-32 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(circle at center, #141414, transparent 1180px), url(${slika})`,
        }}
      >
        <h4 className="text-2xl sm:text-5xl font-semibold text-center text-white mb-4 sm:mb-10 orange_gradient">
          {naslov}
        </h4>
        <p className="text-sm sm:text-lg text-center opacity-90 text-white mb-4  px-0 sm:px-16 sm:mb-10">
          {text}
        </p>
        <Link
          href={link}
          draggable="false"
          className="mt-auto self-center text-md sm:text-xl p-2 sm:p-3 px-5 sm:px-6 font-medium border border-white rounded-full text-white hover:bg-white hover:text-black transition-all active:scale-95 hover:scale-105"
        >
          {btn}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
