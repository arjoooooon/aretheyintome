import Image from 'next/image'
import React, { useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const FormComponent = () => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    console.log(text);

    fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "text": text })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
  }

  return (
    <div>
      <div className='text-gray-700 font-bold text-primary'>Add your conversation here</div>
        <form onSubmit={submitForm}>
          <br />
          <div>
            <input className="textarea textarea-bordered textarea-lg py-2 px-2 w-full shadow appearance-none border text-gray-700" value={text} onChange={(e) => setText(e.target.value)}></input>
          </div>
          <br />
          <button className="relative hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={submitForm}>
            Generate Response
          </button>
        </form>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header>
        <nav className="px-4 lg:px-6 py-2.5 bg-background_secondary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a>
              <img src="" className="mr-3 h-6 sm:h-9" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AreTheyIntoMe</span>
            </a>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For Love</a>
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
      <div id='pageWrapper' className='w-screen h-screen bg-background'>
        <div id='title' className='pl-20 pt-20'>
          <h1 className='text-4xl text-gray-200 text-secondary font-bold'>Are They Into Me?</h1>
          <h2 className='text-gray-100 mt-2 text-secondary'>An AI product brought to you with love 💕</h2>
        </div>
        <div className="grid grid-flow-col auto-cols-2">
          <div className='sm:justify-left px-10 mt-10'>
            <FormComponent />
          </div>

          <div className='sm:justify-left px-10 mt-10'>
            <div className='text-gray-100 font-bold text-primary'>Response
              <br />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
