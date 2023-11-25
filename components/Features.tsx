const Features = () => {
  return (
    <section className="my-52">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 dark:text-white">
          Zašto sarađivati s nama?
        </h2>

        <div className="flex flex-col md:flex-row justify-around items-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Povećajte prodaju
            </h3>
            <p className="dark:text-white">
              Držite kuhinju zaposlenom. Pridružite se dobro podmazanoj
              marketinškoj mašini i posmatrajte porudžbine kako stižu na vrata i
              online.
            </p>
          </div>

          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Dosegnite više kupaca
            </h3>
            <p className="dark:text-white">
              Upoznajte ih i zadržite. Privucite nove lokalne kupce i
              zadržavajte ih da se stalno vraćaju.
            </p>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Koristite naše usluge
            </h3>
            <p className="dark:text-white">
              Za firme velike i male. Bez obzira na vašu veličinu, imamo alate,
              podršku za biznis i uštede koje će vam pomoći u rastu vašeg
              poslovanja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
