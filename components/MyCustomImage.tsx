'use client';
import React from 'react';
import Image, { ImageProps } from 'next/image';
export type MyCustomImageProps = Omit<ImageProps, 'loader'>;

const MyCustomImage = (props: MyCustomImageProps) => {
  return (
    <Image
      {...props}
      alt={props.alt}
      loader={({ src, width, quality }) => {
        const url = new URL(`${props.src}`);
        url.searchParams.append('src', src);
        url.searchParams.append('w', width + '');
        url.searchParams.append('q', quality + '');
        return url.toString();
      }}
      draggable="false"
      width={props.width}
      height={props.height}
    />
  );
};

export default MyCustomImage;
