'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathName = usePathname();
  return (
    <header className="w-full py-[6px] px-[15px] flex justify-between items-center  bg-[#f7f7f7] ">
      <h1 className="text-[30px] font-bold">{pathName.substring(1)}</h1>
      <div className="border-[2px] border-[#eaeaea] rounded-full bg-white">
        <button className="flex flex-col justify-center items-center w-[55px] h-[55px]">
          <p className="text-[8px] font-medium">What's</p>
          <p className="text-[8px] font-medium">your</p>
          <p className="text-[11px] font-bold">VDOT?</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
