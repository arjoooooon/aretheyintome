import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Typewriter from 'typewriter-effect';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] })
const homeMessages = [
  'Hey ;)',
  'Would you like to grab some coffee?',
  "I'm kinda busy",
  'I have a boyfriend',
  'Is that an invitation?',
  "I thought you'd never ask <3",
  "Do you want to play heads up with me?"
]


export default function Home() {
  return (
    <main>
      <Header /> 
      <div className="relative isolate h-screen w-screen bg-background">
        <div className="lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-primary">
              Are They Into Me?
            </h1>
            <br />
            <div className="flex justify-center">
              <div>
                <div className="text-xl font-bold text-primary">
                  <Typewriter
                    options={{
                      strings: homeMessages,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-primary">
              For Love, For Work, and For Friendship.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/ForLove"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Love
              </a>
              <a
                href="/ForLove"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Work
              </a>
              <a
                href="/ForLove"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Friendship
              </a>
            </div>
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
