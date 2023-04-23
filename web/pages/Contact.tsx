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

export default function Contact() {
    return (
        <main>
      <header>
        <nav className="px-4 lg:px-6 py-2.5 bg-background_secondary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href = "/">
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
            <div className="container my-auto mx-auto px-6 bg-background w-screen h-screen">
                <section className="mb-32 text-gray-800">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
                            <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
                            <p className="font-bold mb-2">How to contribute to our dataset?</p>
                            <p className="text-gray-500 mb-6">
                                We love people contributing!
                                Love it very much.

                                very very much.
                            </p>
                            <p className="font-bold mb-2">Non cupidatat skateboard dolor brunch?</p>
                            <p className="text-gray-500 mb-6">
                                Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
                                magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
                                iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
                                unde quod modi magnam ab deserunt ipsam sint aliquid dolores
                                libero repellendus cupiditate mollitia quidem dolorem odit
                            </p>
                            <p className="font-bold mb-2">
                                Praesentium voluptatibus temporibus consequatur non aspernatur?
                            </p>
                            <p className="text-gray-500 mb-6">
                                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                                deserunt ipsam sint aliquid dolores libero repellendus cupiditate
                                mollitia quidem dolorem.
                            </p>

                            <p className="font-bold mb-2">
                                Voluptatum magnam sed fugit iusto minus et suscipit?
                            </p>
                            <p className="text-gray-500">
                                Laudantium perferendis, est alias iure ut veniam suscipit dolorem
                                fugit. Et ipsam corporis earum ea ut quae cum non iusto blanditiis
                                ipsum dolor eius reiciendis, velit adipisci quas.
                            </p>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
                            <p className="font-bold mb-6">Didn't find your answer in the FAQ? Contact our sales</p>
                            <form>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-background bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-background focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                        placeholder="Name" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-background bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-background focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                        placeholder="Email address" />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-background bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-background focus:border-blue-600 focus:outline-none
                    " id="exampleFormControlTextarea13" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="
                    w-full
                    px-6
                    py-2.5
                    bg-background
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Send</button>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}
