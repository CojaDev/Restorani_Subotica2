import React from 'react';
import Image from 'next/image';
const EmailSent = ({ reset }: any) => {
  return (
    <div className="flex-center flex-col gap-4 p-4">
      <p className="text-2xl font-medium"> Poruka je uspesno poslata</p>
      <Image
        src="/checkmark.png"
        alt="checkmark"
        width={100}
        height={100}
        className="drop-shadow-xl mb-3"
      />
      <button
        className=" p-1.5 px-5 rounded-3xl border border-black bg-black text-white hover:bg-white hover:text-black transition-all hover:shadow-xl shadow-black"
        onClick={reset}
      >
        Nazad
      </button>
    </div>
  );
};

export default EmailSent;
