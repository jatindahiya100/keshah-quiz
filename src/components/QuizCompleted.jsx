import React from 'react';
import { motion } from 'framer-motion';
import StripeCheckoutForm from './StripeCheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import finalScreenPhotoGrid01 from '../assets/media/Daily Routine/finalScreenPhotoGrid01.png';
import finalScreenPhotoGrid02 from '../assets/media/Daily Routine/finalScreenPhotoGrid02.png';
import finalScreenPhotoGrid03 from '../assets/media/Daily Routine/finalScreenPhotoGrid03.png';
import finalScreenPhotoGrid04 from '../assets/media/Daily Routine/finalScreenPhotoGrid04.png';
import finalScreenPhotoGrid05 from '../assets/media/Daily Routine/finalScreenPhotoGrid05.png';
import finalScreenPhotoGrid06 from '../assets/media/Daily Routine/finalScreenPhotoGrid06.png';
import finalScreenPhotoGrid07 from '../assets/media/Daily Routine/finalScreenPhotoGrid07.png';
import finalScreenPhotoGrid08 from '../assets/media/Daily Routine/finalScreenPhotoGrid08.png';
import finalScreenPhotoGrid09 from '../assets/media/Daily Routine/finalScreenPhotoGrid09.png';
import finalScreenPhotoGrid10 from '../assets/media/Daily Routine/finalScreenPhotoGrid10.png';


// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const images = [
    finalScreenPhotoGrid01,
    finalScreenPhotoGrid02,
    finalScreenPhotoGrid03,
    finalScreenPhotoGrid04,
    finalScreenPhotoGrid05,
    finalScreenPhotoGrid06,
    finalScreenPhotoGrid07,
    finalScreenPhotoGrid08,
    finalScreenPhotoGrid09,
    finalScreenPhotoGrid10,
];

export default function QuizCompleted() {
    return (
        <div className='max-w-md mx-auto p-6 rounded-3xl flex flex-col gap-6 min-h-[600px] relative mt-6'>
            <motion.div className='w-full h-fit flex items-center justify-between'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.4 }}>
                <div></div>
                <img src="https://keshah.com/wp-content/uploads/2024/09/KESHAHWhiteLogoPNG-2.png" className="w-[120px]" alt="Keshah Logo" />
                <div></div>
            </motion.div>
            <h1 className='text-white font-light text-4xl'>
                Try your first month, <span className='text-[#369033]'>70% OFF.</span>
            </h1>
            <p className='text-white font-light text-sm leading-loose tracking-wide'>
                <span className='text-[#369033]'>For just $29.99</span>, you get one full month of drug-free hair loss treatment:
            </p>
            <ul className='text-white font-light list-disc text-sm leading-loose tracking-wide'>
                <li>Full access to the KESHAH app</li>
                <li>Daily Mechanotherapy</li>
                <li>Live chat support with trained hair expert</li>
                <li>30-day check in video call</li>
                <li>Consistency tracking</li>
                <li>Before & after tracking</li>
                <li>Weekly Surveys</li>
                <li>Vriddhi Oil (one-month supply)</li>
                <li>Ojus Oil (one-month supply)</li>
            </ul>
            <div className='bg-[#242424] rounded-xl flex flex-col items-center gap-1 px-12 py-6'>
                <p className='text-white font-light text-sm leading-loose tracking-wide bg-transparent text-center'>
                    Your personalized treatment has been saved for the next 15 minutes
                </p>
                <b className='text-white font-medium text-sm leading-loose tracking-wide bg-transparent text-center'>
                    Time Remaining:
                </b>
                <p className='text-white text-3xl leading-loose tracking-wide bg-transparent text-center'>13:22</p>
            </div>
            <p className='text-white font-light text-2xl'>Join thousands of men regrowing their hair</p>
            <div className='flex gap-8'>
                <div className="px-6 py-6 border rounded-2xl flex flex-col gap-1 justify-center">
                    <span className='text-[#369033] text-xl'>85%</span>
                    <p className='text-white text-sm font-extralight'>See regrowth post treatment.</p>
                </div>
                <div className="px-6 py-6 border rounded-2xl flex flex-col gap-1 justify-center">
                    <span className='text-[#369033] text-xl'>0%</span>
                    <p className='text-white text-sm font-extralight'>Reported side-effect risk.</p>
                </div>
            </div>
            <div className='grid grid-cols-5'> {/* Optional: add gap for spacing */}
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Photo ${index + 1}`} className='object-cover w-full h-full' />
                ))}
            </div>
            <div className='px-6 py-6 border rounded-2xl flex flex-col gap-6 justify-center'>
                <div className='flex items-center justify-between'>
                    <p className='text-white text-sm font-extralight'>Total Today</p>
                    <p className='text-white text-sm font-extralight'>$29.99 <strike>$99.99</strike> <span className='bg-[#369033] p-1 rounded text-xs font-normal'>Saving $70</span> </p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-white text-sm font-extralight'>Price after first month</p>
                    <p className='text-white text-sm font-extralight'>$99.99/month</p>
                </div>
                <p className='text-white text-sm font-extralight text-center'>No commitment. Cancel anytime. </p>
            </div>
            <div className='bg-[#242424] rounded-xl p-6 mt-4'>
                <h2 className='text-white text-2xl font-light mb-4 bg-transparent'>Billing Details</h2>
                <p></p>
                <Elements stripe={stripePromise}>
                    <StripeCheckoutForm />
                </Elements>
            </div>
            <div className='bg-[#242424] rounded-xl flex flex-col items-center gap-1 px-12 py-6'>
                <p className='text-white font-light text-sm leading-loose tracking-wide bg-transparent text-center'>
                    100% Money Back Guarantee.
                </p>
                <p className='text-white font-light text-sm leading-loose tracking-wide bg-transparent text-justify'>Enjoy extra peace of mind. You can claim a full refund within 30 days if you’ve completed at least 80% of the sessions and still feel KESHAH isn’t right for you. </p>
            </div>
        </div>
    );
}
