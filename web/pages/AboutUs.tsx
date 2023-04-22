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

export default function AboutUs() {
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
                                    <a href="." className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">For Love</a>
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
            <div className="container my-auto mx-auto px-6 bg-background w-screen h-screen">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        We are a team of passionate individuals dedicated to creating innovative and intuitive software solutions for businesses of all sizes. With years of experience and a focus on customer satisfaction, we strive to exceed expectations and deliver exceptional results.
      </p>
      <p className="text-lg mb-4">
        Our mission is to empower businesses with cutting-edge technology and help them succeed in an ever-evolving digital landscape. We believe in creating meaningful and long-lasting relationships with our clients, and we are committed to providing the highest level of service and support.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <p className="text-lg mb-4">
        Our team consists of talented and experienced developers, designers, and project managers who are passionate about what they do. We value collaboration and creativity, and we are constantly pushing ourselves to learn and grow.
      </p>
      <p className="text-lg mb-4">
        We believe that the success of our clients is our success, and we are dedicated to helping them achieve their goals. Whether you're a small startup or a large corporation, we have the expertise and resources to help you succeed.
      </p>
    </div>
        </main>
    )
}

