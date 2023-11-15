import { useEffect } from 'react';
import Link from 'next/link';
import MyCustomImage from './MyCustomImage';
import Image from 'next/image';

//glassmorphism prompt_card

type slideProps = {
  naslov: string;
  flip: boolean;
  lista: any;
};
let isDragging = false,
  startX: any,
  startScrollLeft: any;

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];
const dayName = days[new Date().getDay()];

const CardSlider = ({ naslov, lista, flip }: slideProps) => {
  const categoryChecker = (naziv: string) => {
    if (naziv === 'fast food') {
      return 'fast';
    } else {
      return naziv;
    }
  };

  const slideLeft = () => {
    let slider = document.getElementById(`${naslov}`);
    slider!.scrollLeft = slider!.scrollLeft - 285;
    console.log(dayName);
  };

  const slideRight = () => {
    let slider = document.getElementById(`${naslov}`);
    slider!.scrollLeft = slider!.scrollLeft + 285;
  };

  function dragStart(e: any) {
    let slider = document.getElementById(`${naslov}`);
    isDragging = true;
    slider!.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = slider!.scrollLeft;
  }
  function dragStop() {
    let slider = document.getElementById(`${naslov}`);
    isDragging = false;
    slider!.classList.remove('dragging');
  }

  function dragging(e: any) {
    let slider = document.getElementById(`${naslov}`);
    if (!isDragging) return;
    slider!.scrollLeft = startScrollLeft - (e.pageX - startX);
  }

  useEffect(() => {
    let slider = document.getElementById(`${naslov}`);
    if (slider) {
      slider.scrollLeft -= slider.clientWidth + 10;
      console.log('fliped');
    }
  }, [flip]);

  return (
    <section className="flex-col items-center w-full mt-20 px-2">
      <div className="flex-between w-full">
        <h4 className="px-1 dark:text-white font-semibold text-xl">{naslov}</h4>
        <div className="p-4 flex-between gap-1">
          <Image
            src={'/slide.png'}
            alt="arrow"
            width={40}
            height={40}
            className="invert-0 dark:invert -scale-100 p-2.5 hover:-scale-110 active:-scale-100 transition-all border border-black"
            onClick={slideLeft}
          />
          <Image
            src={'/slide.png'}
            alt="arrow"
            width={40}
            height={40}
            className="invert-0 dark:invert p-2.5 hover:scale-110 border transition-all active:scale-100 border-black"
            onClick={slideRight}
          />
        </div>
      </div>
      <div
        className={`flex-between gap-4 ${
          flip === true ? 'flex-row-reverse' : 'flex-row'
        } w-full overflow-x-scroll scroll-none transition-all scroll-smooth select-none slider active:cursor-grabbing cursor-grab `}
        id={`${naslov}`}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseLeave={dragStop}
        onMouseUp={dragStop}
      >
        {lista.map((restoran: any) => (
          <div className="relative select-none rounded-b-xl rounded-t-md p-2 bg-gray-800/20 dark:bg-white/20  transition-all  ">
            <Link
              key={restoran.id}
              href={`/restorani/[restorani]`}
              as={`/restorani/${encodeURIComponent(
                restoran.naziv.replace(/\s+/g, '-')
              )}`}
              draggable="false"
            >
              <Link
                href={`/restorani/kategorije/[kategorija]`}
                as={`/restorani/kategorije/${categoryChecker(
                  restoran.vrsta.toLowerCase()
                )}`}
                draggable="false"
                className="absolute top-3 left-3 hover:scale-105 p-2.5 py-1  bg-opacity-90 rounded-3xl transition-all z-10 shadow-md hover:shadow-xl bg-amber-400"
              >
                <p className="tag text-sm">{restoran.vrsta}</p>
              </Link>
              <div className="overflow-hidden">
                <MyCustomImage
                  src={restoran.slike[0]}
                  alt={restoran.naziv}
                  width={600}
                  height={400}
                  className="card_img hover:scale-105 transition-all "
                />
              </div>
            </Link>

            <div className=" w-full">
              <p className="p-2 pb-0 dark:text-white font-semibold">
                {restoran.naziv}
              </p>
              <div className="  flex-start">
                <Image
                  src={'/clock.png'}
                  alt="clock"
                  width={21}
                  height={21}
                  className="pl-1.5 mt-[2px] dark:invert"
                />
                <p className="px-1 dark:text-white text-sm">
                  {restoran.radnoVreme[dayName].otvaranje} /{' '}
                  {restoran.radnoVreme[dayName].zatvaranje}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSlider;
