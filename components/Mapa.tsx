import Image from 'next/image';
type resprop = {
  restoran: any;
};
interface Jelo {
  naziv: string;
  opis: string;
  cenaMala: any;
  cenaVelika: number | null;
  slika: URL;
}
function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
const Mapa = ({ restoran }: resprop) => {
  return (
    <div className="mapa relative z-[1] ">
      <iframe
        width="100%"
        height="400"
        style={{ border: 0, userSelect: 'none', padding: '2px' }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${restoran.kordinate[1]},${restoran.kordinate[0]},${restoran.kordinate[1]},${restoran.kordinate[0]}&amp;layer=mapnik&zoom=18&zoomcontrol=0&scalecontrol=0`}
        allowFullScreen
        draggable="false"
        sandbox="allow-scripts"
      ></iframe>
      <Image
        src="/marker.png"
        alt="marker"
        className="absolute top-2/4 left-2/4 z-50 -translate-x-2/4  -translate-y-2/4"
        width={35}
        height={40}
        draggable="false"
      />
    </div>
  );
};

export default Mapa;
