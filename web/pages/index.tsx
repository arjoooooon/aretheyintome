import Image from 'next/image'
import React, { useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const FormComponent = (props) => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    console.log(text);

    fetch('http://localhost:8080/classify', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "text": text })
})
   .then(response => response.json())
   .then(response => props.updateResponse(response));
  }

  return (
    <div>
      <div className='text-gray-700 font-bold text-primary'>Add your conversation here</div>
        <form onSubmit={submitForm}>
          <br />
          <div>
            <input className=" textarea-bordered textarea-lg py-2 px-2 w-full shadow appearance-none border text-primary" value={text} onChange={(e) => setText(e.target.value)}></input>
          </div>
          <br />
          <button className="relative hover:bg-gray-100 text-primary font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={submitForm}>
            Generate Response
          </button>
        </form>
    </div>
  );
}

export default function Home() {
  const [response, setResponse] = useState('');

  return (
    <main>
      <header>
        <nav className="px-4 lg:px-6 py-2.5 bg-background_secondary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/">
              <img src="" className="mr-3 h-6 sm:h-9" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Are They Into Me</span>
            </a>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="/ForLove" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For Love</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For Work</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For Friendship</a>
                </li>
                <li>
                  <a href="/Contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
                <li>
                  <a href="/AboutUs" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen w-screen">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="mx-auto w-max py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-primary">
              Are They Into Me?
            </h1>
            <br/>
            <p className= "animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl font-bold text-primary">
            Wanna go to the gym with me? Sure! <br/>
            Poker tonight? Humm, maybe next time?
            {/* I heard you guys are playing poker<br/>
            ya, we just play for fun, no strategy<br/>
            wanna come next time? <br/>
            I'm so down, totally<br/> */}
            </p>
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
