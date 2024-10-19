import React from 'react';
import { motion } from 'framer-motion';
import StripeCheckoutForm from './StripeCheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

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

            <div className='bg-[#242424] rounded-xl p-6 mt-4'>
                <h2 className='text-white text-2xl font-light mb-4 bg-transparent'>Billing Details</h2>
                <p></p>
                <Elements stripe={stripePromise}>
                    <StripeCheckoutForm />
                </Elements>
            </div>
        </div>
    );
}
