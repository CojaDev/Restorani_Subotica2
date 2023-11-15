'use client';
import Hero from '@/components/Hero';
import Kategorije from '@/components/Kategorije';
import { RERSTORANI } from '@/constants/restorani';

import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CardSlider from '@/components/CardSlider';
import DiscoverSection from '@/components/DiscoverySection';
import CTASection from '@/components/CTASection';

export default function Home() {
  //lenis Smooth Scroll
  const lenis = new Lenis();
  useEffect(() => {
    // Check if the device is not a mobile device
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      lenis.on('scroll', (e: any) => {});

      const raf = function (time: any) {
        lenis.raf(time);

        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }
  }, [lenis]);

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
