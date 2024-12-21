'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { AiOutlineCalculator as CalculatorIcon } from 'react-icons/ai';
import { FaRunning as RunningIcon } from 'react-icons/fa';
import { FaEquals as EquivalentIcon } from 'react-icons/fa6';
import { FiMoreHorizontal as MoreIcon } from 'react-icons/fi';

export default function NavBar() {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  console.log(pathName);
  return (
    <nav className="w-full bg-white border-t shadow-md fixed bottom-0">
      <ul className="flex justify-around items-center py-4">
        {/* Calculator */}
        <li>
          <Link
            href="/Calculator"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="Calculator"
          >
            <CalculatorIcon
              className={pathName === '/Calculator' ? 'text-[#111111]' : 'text-[#999999]'}
              size={24}
            />

            <span
              className={
                pathName === '/Calculator'
                  ? 'text-[#111111] text-xs mt-1'
                  : 'text-[#999999] text-xs mt-1'
              }
            >
              Calculator
            </span>
          </Link>
        </li>
        {/* Training */}
        <li>
          <Link
            href="/Training"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="Training"
          >
            <RunningIcon
              className={pathName === '/Training' ? 'text-[#111111]' : 'text-[#999999]'}
              size={24}
            />

            <span
              className={
                pathName === '/Training'
                  ? 'text-[#111111] text-xs mt-1'
                  : 'text-[#999999] text-xs mt-1'
              }
            >
              Training
            </span>
          </Link>
        </li>
        {/* Equivalent */}
        <li>
          <Link
            href="/Equivalent"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="Equivalent"
          >
            <EquivalentIcon
              className={pathName === '/Equivalent' ? 'text-[#111111]' : 'text-[#999999]'}
              size={24}
            />

            <span
              className={
                pathName === '/Equivalent'
                  ? 'text-[#111111] text-xs mt-1'
                  : 'text-[#999999] text-xs mt-1'
              }
            >
              Equivalent
            </span>
          </Link>
        </li>
        {/* More */}
        <li>
          <Link
            href="/More"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="More"
          >
            <MoreIcon
              className={pathName === '/More' ? 'text-[#111111]' : 'text-[#999999]'}
              size={24}
            />

            <span
              className={
                pathName === '/More' ? 'text-[#111111] text-xs mt-1' : 'text-[#999999] text-xs mt-1'
              }
            >
              More
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
