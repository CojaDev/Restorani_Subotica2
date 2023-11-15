import Search from '@/components/Search';
const Hero = () => {
  return (
    <section className="w-full flex-center flex-col sm:mt-0 mt-36">
      <h1 className="head_text text-center">
        Restorani
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Subotica</span>
      </h1>
      <p className="desc text-center sm:px-0 px-2">
        Otkrijte najbolje ukuse grada uz našu ekskluzivnu selekciju restorana i
        jelovnika. Vaše gastronomsko putovanje počinje ovde.
      </p>
      <Search placeholder="Restoran.." navbar={false} />
    </section>
  );
};

export default Hero;
