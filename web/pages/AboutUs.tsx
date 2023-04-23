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

export default function AboutUs() {
    return (
        <main>
            <Header />
            <div className="relative isolate h-screen w-screen lg:py-10 px-20 bg-background">
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

