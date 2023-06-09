import Image from "next/image";
import Logo from '../assets/brighterLogowQuestion.png';

import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
      <div className="font-courier sticky top-0 z-50">
        <nav className="px-4 lg:px-6 py-2.5 bg-background_secondary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex inline">
              <Image src={Logo} alt="logo" width={70} height={70} />
              <span className="self-center text-m font-semibold whitespace-nowrap dark:text-white ml-3">Are they into me?</span>
            </Link>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='_blank' className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}