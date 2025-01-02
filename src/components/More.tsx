import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const More = () => {
  return (
    <>
      <section className="w-full overflow-x-auto h-[120%]">
        <ul className="mx-4  mb-[14px] bg-white rounded-[7.5px]">
          <li className="flex border-b border-[#EAEAEA] py-[16px] justify-between px-[16px]">
            <div className="font-bold text-[14px]">About</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={20} color="#BABABA" />
            </div>
          </li>
          <li className="flex border-b border-[#EAEAEA] py-[16px] justify-between px-[16px]">
            <div className="font-bold text-[14px]">Training Definitions</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={20} color="#BABABA" />
            </div>
          </li>
          <li className="flex border-b border-[#EAEAEA] py-[16px] justify-between px-[16px]">
            <div className="font-bold text-[14px]">Manage Workouts On V.O2</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={20} color="#BABABA" />
            </div>
          </li>
          <li className="flex border-b border-[#EAEAEA] py-[16px] justify-between px-[16px]">
            <div className="font-bold text-[14px]">Upgrade to Premium</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={20} color="#BABABA" />
            </div>
          </li>
          <li className="flex py-[16px] justify-between px-[16px]">
            <div className="font-bold text-[14px]">Settings</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={20} color="#BABABA" />
            </div>
          </li>
        </ul>
        <div className="mx-[14px] rounded-[6.5px]">
          <Image
            src="/image5.png"
            alt="Sync with your favorite tracker"
            priority
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

export default More;
