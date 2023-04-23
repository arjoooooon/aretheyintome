import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] })

const FormComponent = (props) => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    console.log(text);

    fetch('http://54.153.67.179:8080/classify', {
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
                    Generate Response
                </button>
            </form>
        </div>
    );
}
export default function ForLove() {
  const [response, setResponse] = useState({reason: ''});

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
                    <div className='text-gray-100 font-bold text-primary'>Flirty or Not <br/></div>
                    <p> We are using a trail API key, which limited 5 API calls per minutes.</p>
                        <div className='text-gray-100 font-bold text-primary'>
                            {response.reason}
                        </div>
                    </div>
                </div>
            </div>
    </main>
  )
}
