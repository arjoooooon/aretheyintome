import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const MessageText = () => {
  return (
    <form className='w-max'>
      <input type="text" className='shadow appearance-none border text-primary rounded w-max py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
    </form>
  )
}

export default function Home() {
  return (
    <main>
      <div id='pageWrapper' className='w-screen h-screen bg-background'>
        <div id='title' className='pl-20 pt-20'>
          <h1 className='text-4xl text-gray-200 text-secondary font-bold'>Are They Into Me?</h1>
          <h2 className='text-gray-100 mt-2 text-secondary'>An AI product brought to you with love 💕</h2>
        </div>
        <div className='flex sm:justify-center mt-20'>
          <div className='text-gray-100 font-sm text-primary'>Add your texts here</div>
          <input type="text" className='shadow appearance-none border text-primary rounded w-9/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
        </div>
      </div>
    </main>
  )
}
