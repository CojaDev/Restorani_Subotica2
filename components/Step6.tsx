import Image from 'next/image';
const Step6 = ({ setStep }: any) => {
  return (
    <>
      <div className="flex flex-col mt-6">
        <h2 className="text-2xl font-medium mb-3 text-center">
          Uspesno ste dodali Restoran
        </h2>

        <div className="flex flex-col mb-2">
          <div className="flex-center flex-col mb-5 gap-4 mt-6">
            <Image
              src="/checkmark.png"
              alt="checkmark"
              width={100}
              height={100}
            />
            <h4 className="max-w-xs text-center">
              Naš tim će pažljivo pregledati pružene informacije. Ukoliko su svi
              podaci tačni i kompletni, restoran će biti objavljen u narednim
              danima.
            </h4>
          </div>
        </div>
      </div>

      <button
        className="px-6 py-2 mt-auto mb-7 bg-black hover:bg-black/70 rounded-3xl text-white  transition-all"
        onClick={() => {
          setStep(1);
        }}
      >
        Završi
      </button>
    </>
  );
};

export default Step6;
