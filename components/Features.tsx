import { FEATURES } from '@/constants';
import Image from 'next/image';
const Features = () => {
  return (
    <section className="sm:my-52 sm:mb-40  my-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 dark:text-white">
          Zašto sarađivati s nama?
        </h2>

        <div className="flex flex-col md:flex-row justify-around items-center mb-12">
          {FEATURES.map((feature) => (
            <div
              className="md:w-1/3 mb-8 md:mb-0 sm:mx-0 mx-4 "
              key={feature.key}
            >
              <div className="relative w-20 h-20  mx-auto mb-4">
                <Image
                  src={feature.slika}
                  alt="Image 1"
                  draggable="false"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {feature.naslov}
              </h3>
              <p className="dark:text-white">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
