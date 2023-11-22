import Link from 'next/link';
const Restoran404 = () => {
  return (
    <div className="mt-36 mb-5 flex-col flex-center">
      <p className="dark:text-white text-9xl">404</p>
      <p className="dark:text-white text-xl">Neko je pojeo tvoj restoran</p>
      <Link
        href={'/'}
        draggable="false"
        className="dark:text-white mt-3  outline_btn"
      >
        <p className="text-xl">Vrati se nazad</p>
      </Link>
    </div>
  );
};

export default Restoran404;
