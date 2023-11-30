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
const Galerija = ({ restoran }: resprop) => {
  return (
    <div className="w-full">
      {/* Section for restaurant images */}
      <div className="mb-8">
        <h3 className="dark:text-white text-lg mb-2">Restoran</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {restoran.slike.map((img: any, index: any) => (
            <img
              key={index}
              src={img}
              className={`w-full h-40 object-cover rounded-md ${
                isValidURL(img) ? '' : 'hidden'
              }`}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          ))}
        </div>
      </div>

      {/* Section for images from all foods */}
      <div>
        <h3 className="dark:text-white text-lg mb-2">Hrana</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(restoran.meni).flatMap((category: any) =>
            category.map((jelo: Jelo) => (
              <img
                key={jelo.naziv}
                src={jelo.slika.toString()}
                className={`w-full h-40 object-cover rounded-md ${
                  isValidURL(jelo.slika.toString()) ? '' : 'hidden'
                }`}
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none'; // Hide the image if the URL is invalid
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Galerija;
