import Image from 'next/image';
import React from 'react';

const Equivalent = () => {
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
            src="/image4.png"
            width={500}
            height={500}
            alt="Find out your potential future race times"
            priority
          />
        </div>

        <div className="w-full mt-[20px]">
          <div className="flex gap-[25px]">
            {/* Type Column */}
            <div className="w-[63px] min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px]">Race</div>
              <div className="text-[13px] mb-[6px]">Marathon</div>
              <div className="text-[13px] mb-[6px]">Half Marathon</div>
              <div className="text-[13px] mb-[6px]">10Mi</div>
              <div className="text-[13px] mb-[6px]">15K</div>
              <div className="text-[13px] mb-[6px]">10K</div>
              <div className="text-[13px] mb-[6px]">8K</div>
              <div className="text-[13px] mb-[6px]">6K</div>
              <div className="text-[13px] mb-[6px]">5K</div>
              <div className="text-[13px] mb-[6px]">2Mi</div>
              <div className="text-[13px] mb-[6px]">3200m</div>
              <div className="text-[13px] mb-[6px]">3K</div>
              <div className="text-[13px] mb-[6px]">1Mi</div>
              <div className="text-[13px] mb-[6px]">1600m</div>
              <div className="text-[13px]">1500m</div>
            </div>

            {/* 1 Mi Column */}
            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px] text-right">Time</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] text-right">-</div>
            </div>

            {/* 1 Km Column */}
            <div className="w-[63px] text-center min-w-[63px]">
              <div className="text-[13px] font-bold mb-[8px] text-right">Pace</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] mb-[6px] text-right">-</div>
              <div className="text-[13px] text-right">-</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equivalent;
