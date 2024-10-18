import React, { useState, useEffect, useCallback } from 'react';
import Screen from './Screen';
import quizData from '../data/quizData';
import { motion } from 'framer-motion';

const Quiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const handleNext = useCallback(() => {
        if (currentIndex < quizData.length - 1) {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setIsExiting(false);
            }, 300);
        } else {
            setQuizCompleted(true);
        }
    }, [currentIndex]);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex - 1);
                setIsExiting(false);
            }, 300);
        }
    };

    const handleInputChange = (value, questionId) => {
        const currentQuestionId = questionId;

        if (quizData[currentIndex].content[0].question[0].inputType === 'checkbox') {
            setAnswers((prevAnswers) => {
                const currentAnswers = prevAnswers[currentQuestionId] || [];
                if (currentAnswers.includes(value)) {
                    return {
                        ...prevAnswers,
                        [currentQuestionId]: currentAnswers.filter(answer => answer !== value),
                    };
                } else {
                    return {
                        ...prevAnswers,
                        [currentQuestionId]: [...currentAnswers, value],
                    };
                }
            });
        } else {
            setAnswers((prevAnswers) => ({
                ...prevAnswers,
                [currentQuestionId]: value,
            }));
        }
    };

    useEffect(() => {
        if (quizData[currentIndex].type === 'info') {
            const timer = setTimeout(() => {
                handleNext();
            }, quizData[currentIndex].duration || 3000);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, handleNext]);

    if (quizCompleted) {
        return (
            <div className="mt-12 max-w-md mx-auto border p-8 rounded-3xl text-white">
                <h2 className="text-3xl mb-4">Quiz Completed!</h2>
                <div>
                    {Object.entries(answers).map(([questionId, answer]) => {
                        const question = quizData.flatMap(q => q.content).find(q => q.question && q.question[0].id === questionId);
                        return (
                            <div key={questionId}>
                                <p className="font-bold">{question.question[0].question}</p>
                                <p>Your answer: {Array.isArray(answer) ? answer.join(', ') : answer}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <motion.div
            key={currentIndex}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 0.3 }}
        >
            <Screen
                data={quizData[currentIndex]}
                onNext={handleNext}
                onPrevious={handlePrevious} // Pass down the previous handler
                onInputChange={handleInputChange}
                answers={answers}
            />
        </motion.div>
    );
};

export default Quiz;
