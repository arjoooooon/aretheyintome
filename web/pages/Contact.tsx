import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/header';

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
            <Header />
            <div className="relative isolate h-screen w-screen lg:py-10 px-20 bg-background">
                <section className="mb-32 text-gray-800">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
                            <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
                            <p className="font-bold mb-2">How to contribute to our dataset?</p>
                            <p className="text-gray-500 mb-6">
                                We love people contributing!
                                If you are willing to contribute your chat data to us, you can help improve the accuracy and effectiveness of our model.
                                We understand that privacy is important, and we want to assure you that we will take all necessary measures to protect your privacy. We will anonymize all data and remove any identifying information before using it for our model.
                                Your contributions are incredibly valuable to us, and we appreciate them very much. With your help, we can build a more accurate model that provides helpful suggestions.
                            </p>
                            <p className="font-bold mb-2">Join Us</p>
                            <p className="text-gray-500 mb-6">
                                Work where your mind matters.<br/>
                                Learn more about who we are, where we&aposre hiring, what it's like to work here,
                                and what we offer our employees. When you're ready, submit your resume to apply.

                            </p>
                            <p className="font-bold mb-2">
                                Ways to Give
                            </p>
                            <p className="text-gray-500 mb-6">
                                If you'd like to send a gift through mail, please mail your check to:<br/>

                                Box 511,<br/>
                                301 Platt Blvd<br/>
                                Claremont, CA 91711<br/>

                                Giving Stocks and/or Mutual Funds<br/>

                                Giving stock that has appreciated and you have held for at least one year can be one of the smartest ways to make a gift. You not only obtain a deduction for the full-fair market value of the stock.
                                The objective is to transfer the shares to AreTheyIntoMe rather than sell the shares and forward us the proceeds. The transfer process varies slightly depending on whether or not the stock certificates are in your possession.
                                To initiate a transfer of stock and/or mutual funds to ARIM, please submit the form on the right.
                                Please note that stock gifts may take 3-4 business days to transfer. On average, mutual funds take 3-4 weeks to be received by AreThyIntoMe.


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
