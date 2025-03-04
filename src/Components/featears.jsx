import React from 'react';

export default function Featears({styleOne,styleTwo,styleThree, src, upTitle, firstWorld, title, description,Go }) {
  return (
    <div  className='flex flex-col-reverse text-center md:text-start md:flex-row max-w-full justify-center md:justify-between text-center  md:text-start min-h-[539px] max-x-screen space-y-8 items-center mx-8 py-12 space-x-8'>
      <div  className={`flex flex-col space-y-4 max-w-[800px] min-h-[372px mx-8 ${styleOne} `}>
        <h6 className='text-xs text-white'>{upTitle}</h6>
        <h1  className={`text-7xl text-white font-semibold ${styleTwo}`}>
          <span className='text-[#9333EA]'>{firstWorld}</span> {title}
        </h1>
        <p className='text-white'>{description}</p>
        <p className='text-xl text-white pr-8'>{Go}</p>
      </div>
      <div className='px-4'>
      <img className={` ${styleThree}`} src={src} alt='Feature' />
    </div>
    </div>
  );
}
