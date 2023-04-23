import React, { useState, useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import Typewriter from 'typewriter-effect';
import Header from '../components/header';
import Image from 'next/image';

import LeftLogo from '../assets/leftLogo.png';
import RightLogo from '../assets/rightLogo.png';
import FlirtGif from '../assets/flirt.gif';

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

const FormComponent = (props) => {
  const [text, setText] = useState('')
  const textAreaRef = useRef(null)

  useEffect(() => {
    const scrollHeight = textAreaRef.current.scrollHeight;
    let height = Math.max(scrollHeight, 50);
    height = Math.min(height, 200);
    textAreaRef.current.style.height = height + "px";
  }, [text])

  const submitForm = (e) => {
    e.preventDefault();
    console.log(text);

    fetch('http://localhost:8080/classify', { //54.153.67.179
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
          <textarea ref={textAreaRef} className="textarea-lg py-2 px-2 w-full text-md appearance-none text-primary" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <br />
        <button className="relative hover:bg-gray-100 text-primary font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={submitForm}>
          Find Out!
        </button>
      </form>
    </div>
  );
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
        <div className="flex justify-center items-center h-screen">
          <div className="w-8/12">
            <div className="text-secondary font-bold text-xl">Add your message history</div>
            <FormComponent updateResponse={setResponse}/>
          </div>
        </div>
        <div>
          <div>{response.prediction}</div>
          <div>{response.confidence}</div>
          <div>{response.reason}</div>
        </div>
      </div>
    </main>
  )
}
