import React, { useState, useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import Typewriter from 'typewriter-effect';
import Header from '../components/header';
import Image from 'next/image';

import LeftLogo from '../assets/leftLogo.png';
import RightLogo from '../assets/rightLogo.png';

import FlirtGif from '../assets/flirt.gif';
import HeartbreakGif from '../assets/heartbreak.gif'
import BufferingGif from '../assets/buffering.gif';

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

const FormComponent = (props: any) => {
  const [text, setText] = useState('')
  const textAreaRef = useRef(null)

  useEffect(() => {
    const scrollHeight = textAreaRef.current.scrollHeight;
    let height = Math.max(scrollHeight, 50);
    height = Math.min(height, 200);
    textAreaRef.current.style.height = height + "px";
  }, [text])

  const submitForm = (e: any) => {
    props.updateResponse({ 'prediction': 'NA', 'confidence': 0, 'reason': 'Nothing to see here...yet!' })
    e.preventDefault();
    console.log(text);

    fetch('https://aretheyintome.arjuntaneja.com:8080/classify', {
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
      <form onSubmit={submitForm}>
        <br />
        <div>
          <textarea ref={textAreaRef} className="rounded-xl textarea-lg py-2 px-2 w-full text-md appearance-none text-primary" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <br />
        <button className="relative hover:bg-gray-100 text-primary font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={submitForm}>
          Find Out!
        </button>
      </form>
    </div>
  );
}

const DataReport = (props: any) => {
  const [done, setDone] = useState(false)
  useEffect(() => { setTimeout(() => setDone(true), 2000) }, [])

  return (
    <div className='w-96'>
      {!done ? ((props.response.prediction === 'flirt') ?
        <Image src={FlirtGif} width={250} height={250} alt="Flirt Gif" /> :
        <Image src={HeartbreakGif} width={250} height={250} alt="Heartbreak Gif" />) :
        <div>
          <span className='text-primary'>
            Classification:
          </span>
          <span className='text-secondary text-2xl ml-5 w-96'>
            {props.response.prediction} ({(props.response.confidence * 100).toFixed(1)}%)
          </span>
          <p className='w-33 text-primary mt-5'>
            {props.response.reason}
          </p>
        </div>
      }
    </div>
  )
}

export default function Home() {
  const [response, setResponse] = useState({ 'prediction': 'NA', 'confidence': 0, 'reason': 'Nothing to see here...yet!' })

  return (
    <main>
      <Header />
      <div className="relative isolate h-fit w-screen bg-background font-courier">
        <div className="flex justify-center lg:py-52">
          <div className="text-center">
            <Image src={FlirtGif} width={100} height={100} alt="Flirt Gif" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-primary">
              Are they into me?
            </h1>
            <br />
            <div className="flex justify-center">
              <div>
                <div className="text-xl rounded-full px-5 py-1 bg-message_gray text-black font-helvetica">
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
        <div className='w-screen h-9/12'>
          <div className="flex justify-center pt-10 auto-cols-2">
            <div className='sm:justify-left w-5/12 px-10 mt-10'>
              <div className='text-gray-100 font-bold text-primary'>Add your conversation here:</div>
              <div className="grid grid-flow-col w-12/12">
                <FormComponent updateResponse={setResponse} />
              </div>
            </div>
            <div className='flex justify-center pt-10 auto-cols h-screen'>
              <div className='sm:justify-left w-max px-10'>
                <div className='text-gray-100 font-bold text-primary'>Are they into you?<br /></div>
                {response.prediction === 'NA' ? <Image src={BufferingGif} width={250} height={250} alt="Buffering Gif" /> :
                  <DataReport response={response} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
