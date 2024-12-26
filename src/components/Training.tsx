import Image from 'next/image';
import React from 'react';

const Training = () => {
  return (
    <section className="w-full overflow-x-auto h-[120%]">
      <div className="mx-4 px-[14px] pt-[16px] pb-[16px] mb-[14px] bg-white rounded-[6.5px]">
        {/* Header Section */}
        <h2 className="text-gray-400 font-bold text-[11px] mb-[6px] gap-[25px]">
          CALCULATION RESULTS
        </h2>
        <div className="border-[1px] border-blue-300 bg-blue-100 text-blue-600 px-[26px] py-[4px] text-[14px] text-center">
          Calculate your VDOT to display paces
        </div>

        {/* Image Section */}
        <div className="mt-[14px] rounded-[6.5px]">
          <Image
            src="/image3.png"
            width={500}
            height={500}
            alt="Find out your potential future race times"
            priority
          />
        </div>

        {/* First Table */}
        <div className="w-full mt-[20px]">
          <div className="flex gap-[25px]">
            {/* Type Column */}
            <div className="w-[63px] min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">Type</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Easy</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Marathon</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Threshold</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Interval</div>
              <div className="text-[13px] font-bold text-[#599E43]">Repetition</div>
            </div>

            {/* 1 Mi Column */}
            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">1 Mi</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>

            {/* 1 Km Column */}
            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">1 Km</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>
          </div>
        </div>

        {/* Second Table: 1200M, 800M, 600M */}
        <div className="w-full mt-[20px]">
          <div className="flex">
            <div className="w-[63px] min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">Type</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Threshold</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Interval</div>
              <div className="text-[13px] font-bold text-[#599E43]">Repetition</div>
            </div>

            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">1200M</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>

            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">800M</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>

            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">600M</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>
          </div>
        </div>

        {/* Third Table: 400M, 300M, 200M */}
        <div className="w-full mt-[20px]">
          <div className="flex">
            <div className="w-[63px] min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">Type</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Interval</div>
              <div className="text-[13px] font-bold text-[#599E43] mb-[6px]">Repetition</div>
              <div className="text-[13px] font-bold text-[#599E43]">Fast Reps</div>
            </div>

            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">400M</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>

            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">300M</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>

            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">200M</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px] mb-[6px]">-</div>
              <div className="text-[13px]">-</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
