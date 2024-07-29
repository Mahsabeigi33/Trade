import React from 'react';

export default function Banner ({ imageSrc, heading, subheading }) {
  return (
    <section className="relative">
      <img
        src={imageSrc} 
        alt="Top Banner"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">{heading}</h1>
          <p className="mt-4 text-lg">{subheading}</p>
        </div>
      </div>
    </section>
  );
};

