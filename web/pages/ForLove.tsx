import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] })

const FormComponent = (props: any) => {
  const [text, setText] = useState('')

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(text);

    fetch('https://aretheyintome.arjuntaneja.com:8080/classify', { //54.153.67.179
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
          <textarea className="rounded-lg textarea-lg py-2 px-2 w-full text-sm appearance-none text-primary" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <br />
        <button className="relative hover:bg-gray-100 text-primary font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={submitForm}>
          Find Out!
        </button>
      </form>
    </div>
  );
}
export default function ForLove() {
  const [response, setResponse] = useState({ reason: 'Nothing to see here...yet!' });

  return (
    <main>
      <Header />
      <div id='pageWrapper' className='w-screen h-screen bg-background'>
        <div className="flex justify-center pt-10 auto-cols-2">
          <div className='sm:justify-left w-5/12 px-10 mt-10'>
            <div className='text-gray-100 font-bold text-primary'>Add Your Conversation Here</div>
            <div className="grid grid-flow-col w-12/12">
              <FormComponent updateResponse={setResponse} />
            </div>
          </div>
          <div className='sm:justify-left w-5/12 px-10 mt-10'>
            <div className='text-gray-100 font-bold text-primary'>Are they into you?<br /></div>
            <div className='text-secondary mt-5'>
              {response.reason}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
