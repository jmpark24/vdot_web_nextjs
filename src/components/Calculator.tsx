import { IoMdArrowDropdown } from 'react-icons/io';
import { TfiTimer } from 'react-icons/tfi';
import { RiRunLine } from 'react-icons/ri';
import { GrPowerReset } from 'react-icons/gr';
import Image from 'next/image';

export default function Calculator() {
  return (
    <section className="w-full">
      <div className="mx-4 px-[14px] pt-[28px] pb-[35px] bg-white rounded-[6.5px]">
        <form className="space-y-[14px]">
          {/* Distance Input */}
          <div className="border-[1px] pl-[12px] pr-[16px] py-[14.5px] flex justify-between border-[#eaeaea] rounded-sm">
            <h2 className="text-[#888888] text-[14px] font-[500]">Distance</h2>
            <div className="inline-flex items-center justify-center">
              <IoMdArrowDropdown size={24} color="#b7b7b7" />
            </div>
          </div>

          {/* Time Input */}
          <div className="border-[1px] pl-[12px] pr-[16px] py-[14.5px] flex justify-between border-[#eaeaea] rounded-sm">
            <h2 className="text-[#888888] text-[14px] font-[500]">Time</h2>
            <div className="inline-flex items-center justify-center">
              <TfiTimer size={24} color="#b7b7b7" />
            </div>
          </div>

          {/* Pace Input */}
          <div className="border-[1px] pl-[12px] pr-[16px] py-[14.5px] flex justify-between border-[#eaeaea] rounded-sm">
            <h2 className="text-[#888888] text-[14px] font-[500]">Pace</h2>
            <div className="inline-flex items-center justify-center">
              <RiRunLine size={24} color="#b7b7b7" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-around items-center mt-[7px]">
            <button className="flex flex-col items-center gap-[6px]">
              <div className="flex flex-col gap-1 border-[2px] border-[#d9d9d9] rounded-full p-[6px] w-[30px]">
                <div className="relative">
                  <div className="rounded-full w-1 h-1 bg-black absolute top-[-1px] right-0"></div>
                  <div className="bg-[#101010] w-[15px] h-[2px] rounded-sm"></div>
                </div>
                <div className="relative">
                  <div className="rounded-full w-1 h-1 bg-black absolute top-[-1px] right-[5.5px]"></div>
                  <div className="bg-[#101010] w-[15px] h-[2px] rounded-sm"></div>
                </div>
                <div className="relative">
                  <div className="rounded-full w-1 h-1 bg-black absolute top-[-1px] left-0"></div>
                  <div className="bg-[#101010] w-[15px] h-[2px] rounded-sm"></div>
                </div>
              </div>
              <div className="text-gray-500 text-[8px]">ADVANCED</div>
            </button>
            <button
              type="submit"
              className=" py-[11px] bg-[#599E43] text-white rounded-full hover:bg-green-600"
            >
              <div className="w-[120px] text-[13px] font-medium">Calculate</div>
            </button>
            <button className="flex flex-col items-center gap-[6px]">
              <div className="flex flex-col gap-1 border-[2px] border-[#d9d9d9] rounded-full p-[6px] ">
                <div className="inline-flex items-center justify-center">
                  <GrPowerReset />
                </div>
              </div>
              <div className="text-gray-500 text-[8px]">RESET</div>
            </button>
          </div>
        </form>
      </div>

      <div className="my-[14px] rounded-[6.5px] relative w-full">
        <Image
          src="/image1.png"
          alt="광고1"
          priority
          width={0}
          height={0}
          sizes="100vw"
          className="px-4 w-full"
        />
      </div>

      <div className="my-[14px] rounded-[6.5px] relative w-full">
        <Image
          src="/image2.png"
          alt="광고2"
          priority
          width={0}
          height={0}
          sizes="100vw"
          className="px-4 w-full"
        />
      </div>
    </section>
  );
}
