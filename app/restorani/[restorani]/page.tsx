'use client';
import Restoran404 from '@/components/Restoran404';
import RestoranBanner from '@/components/RestoranBanner';
import RestoranInfo from '@/components/RestoranInfo';
import { RERSTORANI } from '@/constants/restorani';

type nameprop = {
  params: any;
};
const RestoranPage = ({ params }: nameprop) => {
  const { restorani } = params;

  // Find the restoran object based on the 'naziv' parameter
  const restoran = RERSTORANI.find(
    (r) => r.naziv.replace(/\s+/g, '-') === restorani
  );

  if (!restoran) {
    return <Restoran404 />;
  }

  return (
    <div className="flex-center flex-col w-full sm:mt-2 mt-24">
      <RestoranBanner restoran={restoran} />
      <RestoranInfo restoran={restoran} />
    </div>
  );
};

export default RestoranPage;
