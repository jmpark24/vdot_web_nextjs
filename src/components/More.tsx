import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const More = () => {
  return (
    <>
      <section className="w-full overflow-x-auto h-[120%]">
        <ul className="mx-4 px-[16px] mb-[14px] bg-white rounded-[6.5px]">
          <li className="flex border-b border-[#EAEAEA] py-[18px] justify-between">
            <div className="font-bold">About</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={24} color="#BABABA" />
            </div>
          </li>
          <li className="flex border-b border-[#EAEAEA] py-[18px] justify-between">
            <div className="font-bold">Training Definitions</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={24} color="#BABABA" />
            </div>
          </li>
          <li className="flex border-b border-[#EAEAEA] py-[18px] justify-between">
            <div className="font-bold">Manage Workouts On V.O2</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={24} color="#BABABA" />
            </div>
          </li>
          <li className="flex border-b border-[#EAEAEA] py-[18px] justify-between">
            <div className="font-bold">Upgrade to Premium</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={24} color="#BABABA" />
            </div>
          </li>
          <li className="flex py-[18px] justify-between">
            <div className="font-bold">Settings</div>
            <div className="inline-flex items-center justify-center">
              <IoIosArrowForward fontSize={24} color="#BABABA" />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default More;
