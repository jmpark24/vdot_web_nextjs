import Link from 'next/link';
import { AiOutlineCalculator as CalculatorIcon } from 'react-icons/ai';
import { FaRunning as RunningIcon } from 'react-icons/fa';
import { FaEquals as EquivalentIcon } from 'react-icons/fa6';
import { FiMoreHorizontal as MoreIcon } from 'react-icons/fi';

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-t shadow-md fixed bottom-0">
      <ul className="flex justify-around items-center py-4">
        {/* Calculator */}
        <li>
          <Link
            href="/calculator"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="Calculator"
          >
            <CalculatorIcon className="text-black" size={24} />
            <span className="text-xs text-gray-600 mt-1">Calculator</span>
          </Link>
        </li>
        {/* Training */}
        <li>
          <Link
            href="/training"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="Training"
          >
            <RunningIcon className="text-gray-400" size={24} />
            <span className="text-xs text-gray-600 mt-1">Training</span>
          </Link>
        </li>
        {/* Equivalent */}
        <li>
          <Link
            href="/equivalent"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="Equivalent"
          >
            <EquivalentIcon className="text-gray-400" size={24} />
            <span className="text-xs text-gray-600 mt-1">Equivalent</span>
          </Link>
        </li>
        {/* More */}
        <li>
          <Link
            href="/more"
            className="flex flex-col items-center text-center focus:outline-none"
            aria-label="More"
          >
            <MoreIcon className="text-gray-400" size={24} />
            <span className="text-xs text-gray-600 mt-1">More</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
