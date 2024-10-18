import React from 'react';
import { motion } from 'framer-motion';

const Screen = ({ data, onNext, onPrevious, onInputChange, answers }) => {
    const renderContent = () => {
        return data.content.map((item, index) => {
            const delay = index * 0.4;

            if (item.p) {
                return (
                    <motion.p
                        key={index}
                        className="mb-6 text-white font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1, delay }}
                    >
                        {item.p}
                    </motion.p>
                );
            }
            if (item.h1) {
                return (
                    <motion.h1
                        key={index}
                        className="mb-6 text-white font-light text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1, delay }}
                    >
                        {item.h1}
                    </motion.h1>
                );
            }
            if (item.img) {
                return (
                    <motion.img
                        key={index}
                        src={item.img}
                        alt=""
                        className="mb-6 w-full max-h-[400px] object-fit rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1, delay }}
                    />
                );
            }
            if (item && item.question && Array.isArray(item.question) && item.question.length) {
                return item.question.map((q, index) => (
                    <div key={q.id} className="mb-6">
                        <motion.p
                            className={`mb-6 text-white font-light ${item.question.length === 1 ? 'text-2xl' : 'text-sm'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay }}
                        >
                            {item.question.length > 1 ? `${index + 1}. ${q.question}` : q.question}
                        </motion.p>
                        <motion.p
                            className="mb-6 text-white font-extralight text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay }}
                        >
                            {q.description}
                        </motion.p>
                        {renderInput(q)}
                    </div>
                ));
            }      
            return null;
        });
    };

    const renderInput = (question) => {
        switch (question.inputType) {
            case 'radio':
            case 'checkbox':
                return (
                    <div className={`grid gap-6 ${question.options.length > 2 ? 'grid-cols-1' : 'grid-cols-1'}`}>
                        {question.options.map((option, optionIndex) => {
                            const delay = optionIndex * 0.4;
                            return (
                                <motion.div
                                    key={optionIndex}
                                    className="h-full flex items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 1, delay }}>
                                    <input
                                        type={question.inputType}
                                        name={question.id}
                                        id={`option-${optionIndex}-${question.id}`}
                                        value={option}
                                        onChange={() => onInputChange(option, question.id)}
                                        checked={question.inputType === 'checkbox'
                                            ? (answers[question.id] || []).includes(option)
                                            : answers[question.id] === option}
                                        className="appearance-none hidden"
                                    />
                                    <label htmlFor={`option-${optionIndex}-${question.id}`} className={`font-light text-sm text-white w-full h-full p-4 border rounded-lg cursor-pointer transition-all ease-in-out duration-300 inline-flex items-center justify-between ${(answers[question.id] === option || (question.inputType === 'checkbox' && (answers[question.id] || []).includes(option))) ? 'border-blue-500' : 'border-gray-400 hover:border-gray-50'}`}>
                                        {option}
                                        {question?.recommended === option && (
                                            <span className='bg-[#369033] p-1 rounded text-xs font-normal'>Recommended</span>
                                        )}
                                    </label>
                                </motion.div>
                            );
                        })}
                    </div>
                );
            case 'text':
                return (
                    <motion.input
                        type="text"
                        placeholder="Your answer"
                        className="mb-6 w-full p-2 border rounded outline-none text-white"
                        value={answers[question.id] || ''}
                        onChange={(e) => onInputChange(e.target.value, question.id)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                    />
                );
            case 'textarea':
                return (
                    <motion.textarea
                        placeholder="Your answer"
                        className="mb-6 w-full p-2 border rounded outline-none text-white h-24"
                        value={answers[question.id] || ''}
                        onChange={(e) => onInputChange(e.target.value, question.id)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className='max-w-md mx-auto p-8 rounded-3xl flex flex-col items-center justify-between min-h-[600px] relative'>
            <motion.div className='absolute top-8 left-8 cursor-pointer' initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.4 }}
                onClick={onPrevious}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </motion.div>
            <div className='w-full mt-12'>
                {renderContent()} {/* Render content dynamically */}
            </div>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: data.content.length * 0.4 + 1 }} // Adjust based on content length
                onClick={onNext}
                className="bg-white text-black cursor-pointer flex h-12 w-40 items-center justify-center rounded-full text-base font-semibold transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2  dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:text-base">
                <span className="tracking-tight bg-transparent">Next</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 bg-transparent">
                    <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
            </motion.button>
        </div>
    );
};

export default Screen;
