import Screen3Gifs from '../assets/media/Screen3.GIF';
import Screen5Photo from '../assets/media/Screen5Photo.png';
import Screen6Gifs from '../assets/media/Screen6.GIF';
import Screen23 from '../assets/media/Screen23.png';

const quizData = [
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q1', // Unique ID for question
                        question: 'Were you recommended by a healthcare professional?',
                        description: 'A growing number of healthcare professionals are recommending KESHAH.',
                        options: ['Yes', 'No'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q2', // Unique ID for question
                        question: 'How much hair have you lost?',
                        description: '', // Consider adding a description for consistency
                        options: [
                            'None (trying to get ahead of it)',
                            'A little (only I notice it)',
                            'Some (those close to me notice)',
                            'A lot (it’s obvious to everyone)',
                        ],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info', // Indicates this is an informational item
        content: [
            { p: 'You’re not alone. Men of varying degrees of hair loss are seeing hair regrowth by targeting scalp tension and inflammation.' },
            { img: Screen3Gifs }
        ],
        duration: 10000, // Display for 10 seconds
    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q3', // Unique ID for question 
                        question: 'Where have you noticed hair loss?',
                        options: ['Hairline', 'Crown', 'All over'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { p: 'Most men lose hair in the hairline and crown because of the structural setup of the skull. Most of the scalp tension is stored in these areas making them the first areas of hair loss.' },
            { img: Screen5Photo },
            { p: 'This groundbreaking study shows the correlation between high areas of scalp tension (light blue areas) and where most men first experience hair loss (crown and hairline). ' }
        ],
        duration: 10000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q4', // Unique ID for question 
                        question: 'When did you start noticing changes to your hair?',
                        options: ['In the past few months', 'In the past year', 'Over a year ago'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q5', // Unique ID for question 
                        question: 'Do you relate to the following statement?',
                        description: '“My scalp feels inflammed (might include dandruff), and in general unhealthy.”',
                        options: ['Yes', 'Somewhat', 'No'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { p: 'High levels of inflammation causes an increase in the hormone DHT, which then leads to hair loss. ' },
            { p: 'New data shows very specific ingredients (found in India and Japan), can reduce inflammation levels, make your scalp feel healthier, and lead to hair regrowth. ' }
        ],
        duration: 10000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q6', // Unique ID for question 
                        question: 'With treatment, what results are you hoping for?',
                        options: ['Keep the hair I have', 'Visibly thicker, fuller hair', 'Regrowth in thinning/bald areas', 'All of the above'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { p: 'KESHAH is proven to not only stop hair loss & thicken existing hair, but also promote regrowth (even in completely bald areas).' },
            { img: Screen6Gifs }
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q7', // Unique ID for question 
                        question: 'How does dealing with hair loss impact your life?',
                        description: 'Choose as many as you feel appropriate. ',
                        options: ['Nervous to socialize', 'Struggle at work', 'Difficulty dating', 'More/Other'],
                        inputType: 'checkbox', // checkbox input type
                    },
                ],
            },
        ],
    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q8', // Unique ID for question 
                        question: 'Does hair loss run in your family?',
                        options: ['Yes', 'No', 'Not Sure'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { p: 'You inherit your scalp structure from your family, which is why you are more likely to experience scalp tension and hair loss in the same areas as they do.' },
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q9', // Unique ID for question 
                        question: 'How often do you tend to experience stress?',
                        options: ['All the time', 'Sometimes', 'Rarely', 'Not sure'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { p: 'Stress causes a ‘flight or fight’ response, causing a tightening of the neck muscles. This causes an increase in scalp tension and leads to inflammation and hair loss. ' },
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q10', // Unique ID for question 
                        question: 'Finding the right solution can be difficult; some people end up feeling like they’ve tried everything. What options have you tried?',
                        options: ['Finasteride', 'Minoxidil', 'PRP', 'Stem cells', 'Hair Transplant', 'Massages', 'Red Light Therapy', 'Shampoos', 'Oils', 'I haven’t tried anything'],
                        inputType: 'checkbox', // checkbox input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { p: 'Most solutions only provide temporary or incomplete results because they fail to target the root cause of the issue which is increased levels of scalp tension and inflammation.' },
            { p: 'A recent study conducted by Japanese Dr. Taro Koyama found that targeting and reducing scalp tension and inflammation through Mechanotherapy provided effective long-term hair regrowth without the use of diets or drugs.' }
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q11', // Unique ID for question 
                        question: 'How important is your health to you as you try to regrow your hair?',
                        options: ['Very important', 'Somewhat important', 'Not that important'],
                        inputType: 'radio', // Radio input type
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { p: 'Unlike drug-based solutions like Finasteride and Minoxidil which can cause health issues like Erectile Dysfunction and Brain Fog, KESHAH is completely natural and has a 0% side effect risk.' },
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            {
                question: [
                    {
                        id: 'q12', // Unique ID for question 
                        question: 'How much time can you commit to hair regrowth daily.',
                        options: ['15 minutes', '20 minutes', '25 minutes'],
                        description: 'Think of KESHAH like a daily workout, but for your hair. ',
                        inputType: 'radio', // Radio input type
                        recommended: '20 minutes',
                    },
                ],
            },
        ],
    },
    {
        type: 'info',
        content: [
            { h1: 'Good news!' },
            { p: '87% of KESHAH users with your characteristics see their hair loss stop and signs of regrowth in the first 4 months.' },
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'info',
        content: [
            { h1: 'Target the root cause' },
            { p: 'KESHAH Mechanotherapy™ targets scalp tension using very specific massaging and stretching techniques, and inflammation using our natural oils composed of Indian and Japanese ingredients. ' },
            { p: 'Reverse your hair loss from home—no pills, no transplants needed.' }
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'info',
        content: [
            { h1: 'Follow along each day' },
            { p: 'Open your KESHAH App each day and follow along our step-by-step video Mechanotherapy™ guides created by KESHAH Hair Experts.' },
            {img: Screen23}
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'info',
        content: [
            { h1: 'KESHAH Oils' },
            { p: 'Our patent-pending natural oils are composed of Indian and Japanese ingredients and proven to lower inflammation.' },
            { p: 'In combination with the techniques in the KESHAH app, they help stop and reverse your hair loss.' }
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'info',
        content: [
            { h1: 'Consistency tracking' },
            { p: 'Just like working out, consistent effort brings results. The app tracks your completed routines and sends reminders to help you stay on track.' },
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'info',
        content: [
            { h1: 'Live support from Hair Expert' },
            { p: 'Your personal companion will be by your side and answer any questions you might have for the duration of the treatment.' },
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'info',
        content: [
            { h1: 'Before & after photos tracking' },
            { p: 'The app will remind you to take before and after photos every 15 days so we can see hair regrowth over time.' },
        ],
        duration: 15000, // Display for 10 seconds

    },
    {
        type: 'quiz', // Indicates this is a quiz item
        content: [
            { h1: 'Personalized treatment' },
            { p: 'Weekly surveys help us continuously optimize your treatment so you can see the best results based on your hair type.' },
        ],
    },
];

export default quizData;
