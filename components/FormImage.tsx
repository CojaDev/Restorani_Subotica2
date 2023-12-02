import Image from 'next/image';

const FormImage = ({ img1, img2 }: any) => {
  return (
    <div className="lg:flex hidden flex-1">
      <div className="flex flex-col gap-3 flex-1 my-auto">
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src={img1}
            alt="Image 2"
            layout="fill"
            draggable="false"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src={img2}
            alt="Image 2"
            layout="fill"
            draggable="false"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FormImage;
