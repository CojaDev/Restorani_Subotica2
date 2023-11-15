'use client';
import Hero from '@/components/Hero';
import Kategorije from '@/components/Kategorije';
import { RERSTORANI } from '@/constants/restorani';

import CardSlider from '@/components/CardSlider';
import DiscoverSection from '@/components/DiscoverySection';
import CTASection from '@/components/CTASection';

export default function Home() {
  const Najnovije = RERSTORANI.slice(RERSTORANI.length - 8, RERSTORANI.length);
  const Popularno = RERSTORANI.slice(0, 8);
  return (
    <>
      <Hero />
      <Kategorije />
      <CardSlider naslov="Popularno" lista={Popularno} flip={false} />
      <DiscoverSection />
      <CardSlider naslov="Najnovije" lista={Najnovije} flip />
      <CTASection
        naslov="Otkrijte tajnu uspeha za vaš restoran! "
        text="Pridružite se našoj ekskluzivnoj zajednici vlasnika restorana i doživite povećanje poslovanja kao nikada pre. "
        slika="/cta1.jpg"
        btn="Pridruži se!"
        link="/zavlasnike"
      />
    </>
  );
}
