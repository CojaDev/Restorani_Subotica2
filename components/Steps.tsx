import { STEPS } from '@/constants';
import Image from 'next/image';
const Steps = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full p-2">
      <div className="flex flex-col flex-1 p-2 ">
        <h4 className="text-3xl dark:text-white mb-3 font-semibold">
          Kako Dodati Restoran?
        </h4>
        {STEPS.map((step) => (
          <div className="step flex items-center my-2  w-full" key={step.key}>
            <p className="p-1 text-2xl dark:text-black font-medium text-white bg-black rounded-full dark:bg-white w-14 h-14 min-w-[56px] text-center  flex-center">
              {step.key}
            </p>
            <div className="flex flex-col">
              <p className="ml-4 text-xl font-medium dark:text-white text-black">
                {step.naslov}
              </p>
              <p className="ml-4 text-md  dark:text-white/90 text-black/90">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-1 ">
        <div className="relative w-full h-full ">
          <Image
            src="/restoran.jpg"
            alt="Image 2"
            layout="fill"
            draggable="false"
            objectFit="cover"
            className="rounded-lg shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
