import React from 'react';

const ContactInput = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-4">
        <input
          type="text"
          name="ime"
          placeholder="Unesi Ime"
          className="p-2 border border-black focus:outline-orange-400/90 rounded-[4px] focus:shadow-md transition-all  delay-75"
          required
        />
        <input
          type="text"
          name="prezime"
          placeholder="Unesi Prezime"
          className="p-2 border border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Unesi Email"
        className="p-2 border border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
        required
      />
      <input
        type="text"
        name="naslov"
        placeholder="Unesi Naslov"
        className="p-2 border border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
        required
      />
      <textarea
        placeholder="Poruka..."
        name="poruka"
        className="p-2 border min-h-[150px] max-h-[280px] border-black  focus:outline-orange-400/90 focus:shadow-md transition-all delay-75 rounded-[4px]"
        required
      />
      <input
        type="submit"
        value="Pošalji"
        className="p-2 border border-black bg-orange-400 hover:bg-orange-400/80 cursor-pointer  transition-all active:scale-[0.98] font-medium rounded-[4px]"
      />
    </>
  );
};

export default ContactInput;
