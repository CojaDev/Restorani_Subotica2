import MyCustomImage from '@/components/MyCustomImage';

type resProp = {
  restoran: any;
};
const RestoranBanner = ({ restoran }: resProp) => {
  return (
    <div className="banner relative w-screen p-2 flex-center  flex-col bg-black/40 dark:bg-slate-400/40 h-[30rem]  sm:px-20 shadow-lg">
      <MyCustomImage
        src={restoran.slike[1]}
        alt={restoran.naziv}
        width={500}
        height={300}
        className="w-full h-full object-cover "
      />
      <div className=" rounded-full overflow-hidden  border-4 dark:border-white/90 border-gray-700/90 absolute -bottom-10 w-32 h-32 shadow-md">
        <MyCustomImage
          src={restoran.slike[0]}
          alt={restoran.naziv}
          width={170}
          height={170}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RestoranBanner;
