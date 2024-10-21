import React, { useState, useEffect, useCallback } from 'react';
import Screen from './Screen';
import quizData from '../data/quizData';
import { motion } from 'framer-motion';
import QuizCompleted from './QuizCompleted';

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
        if (quizCompleted) {
            // If quiz is completed, go back to the last quiz question
            setIsExiting(true);
            setTimeout(() => {
                setCurrentIndex(quizData.length - 1); // Reset to last quiz question
                setQuizCompleted(false); // Mark quiz as not completed
                setIsExiting(false);
            }, 300);
        } else if (currentIndex > 0) {
            // Normal behavior to go to the previous question
            setIsExiting(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex - 1);
                setIsExiting(false);
            }, 300);
        }
    };

    const handleInputChange = (value, questionId) => {
        if (currentIndex >= 0 && currentIndex < quizData.length) {
            const currentQuiz = quizData[currentIndex];

            if (currentQuiz.content && Array.isArray(currentQuiz.content)) {
                const questionObj = currentQuiz.content.find(item => item.question);

                if (questionObj && questionObj.question && Array.isArray(questionObj.question)) {
                    const questionArray = questionObj.question;
                    const question = questionArray.find(q => q.id === questionId);

                    if (question) {
                        const inputType = question.inputType;

                        if (inputType === 'checkbox') {
                            setAnswers((prevAnswers) => {
                                const currentAnswers = prevAnswers[questionId] || [];
                                if (currentAnswers.includes(value)) {
                                    return {
                                        ...prevAnswers,
                                        [questionId]: currentAnswers.filter(answer => answer !== value),
                                    };
                                } else {
                                    return {
                                        ...prevAnswers,
                                        [questionId]: [...currentAnswers, value],
                                    };
                                }
                            });
                        } else if (inputType === 'radio') {
                            setAnswers((prevAnswers) => ({
                                ...prevAnswers,
                                [questionId]: value,
                            }));
                        }
                    } else {
                        console.error("Question not found for the provided questionId:", questionId);
                    }
                } else {
                    console.error("No questions found in current quiz item:", currentQuiz);
                }
            } else {
                console.error("Current quiz item has invalid content structure:", currentQuiz);
            }
        } else {
            console.error("Current index is out of bounds:", currentIndex);
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
            <motion.div
                key="quiz-completed" // Unique key for transition
                initial={{ opacity: 0}} // Initial state
                animate={{ opacity: 1 }} // Animate in
                exit={{ opacity: 0 }} // Animate out
                transition={{ duration: 1 }} // Transition settings
            >
                <QuizCompleted onPrevious={handlePrevious} />
            </motion.div>
        );
    }

    // Calculate progress percentage
    const progress = ((currentIndex + 1) / quizData.length) * 100;

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
                onPrevious={handlePrevious}
                onInputChange={handleInputChange}
                answers={answers}
                progress={progress}
            />
        </motion.div>
    );
};

export default Quiz;
