import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] })

const FormComponent = (props) => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault();

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
          <textarea className="rounded-lg textarea-lg py-2 px-2 w-full text-sm appearance-none text-primary" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <br />
        <button className="relative hover:bg-gray-100 text-primary font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={submitForm}>
          Generate Response
        </button>
      </form>
    </div>
  );
}
export default function ForLove() {
  const [response, setResponse] = useState({ reason: '' });

  return (
    <main>
      <Header /> 
      <div id='pageWrapper' className='w-screen h-screen bg-background'>
        <div className="flex justify-center pt-10">
          <div className="grid grid-flow-col auto-cols-2 w-8/12">
            <FormComponent updateResponse={setResponse} />
            <div className='sm:justify-left px-10 mt-10'>
              <div className='text-gray-100 text-primary'>
                {response.reason}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
