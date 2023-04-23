import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Typewriter from 'typewriter-effect';
import Header from '../components/header';
import Image from 'next/image';

import LeftLogo from '../assets/leftLogo.png';
import RightLogo from '../assets/rightLogo.png';
import LeftQuestion from '../assets/questionLeft.png';
import RightQuestion from '../assets/questionRight.png';


const inter = Inter({ subsets: ['latin'] })
const homeMessages = [
  'Hey ;)',
  'Wanna get coffee?',
  "I'm kinda busy :/",
  'I have a boyfriend...',
  'It\'s a date :)',
  "I thought you'd never ask <3",
  "We should hang out sometime!",
  "Ew, no."
]

const ImageAnimation = () => {
  const [left, setLeft] = useState(false)
  useEffect(() => {
    setTimeout(() => setLeft(!left), 1000)
  }, [])

  useEffect(() => {
    setTimeout(() => setLeft(!left), 1000)
  }, [left])

  return (
    <div>
      {left && <Image src={LeftQuestion} alt="left logo" width={200} height={200} />}
      {!left && <Image src={RightQuestion} alt="right logo" width={200} height={200} />}
    </div>
  )
}


export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative isolate h-screen w-screen bg-background font-mono">
        <div className="flex justify-center lg:py-56">
          <div className="text-center">
            <ImageAnimation />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-primary">
              Are they into me?
            </h1>
            <br />
            <div className="flex justify-center">
              <div>
                <div className="text-xl rounded-full px-5 py-1 bg-message_gray text-black font-sans">
                  <Typewriter
                    options={{
                      strings: homeMessages,
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      cursorClassName: "text-transparent"
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-primary">
              Clarity for the clueless romantic ↓
            </p>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>
    </main>
  )
}
