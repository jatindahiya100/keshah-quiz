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
        // Check if currentIndex is within bounds of quizData
        if (currentIndex >= 0 && currentIndex < quizData.length) {
            // Access the current quiz item
            const currentQuiz = quizData[currentIndex];

            // Ensure currentQuiz has content and that it's an array
            if (currentQuiz.content && Array.isArray(currentQuiz.content)) {
                // Find the question in the content
                const questionObj = currentQuiz.content.find(item => item.question);

                // Check if questionObj is found and has question property
                if (questionObj && questionObj.question && Array.isArray(questionObj.question)) {
                    const questionArray = questionObj.question;

                    // Loop through questions to find the one matching the questionId
                    const question = questionArray.find(q => q.id === questionId);

                    if (question) {
                        const inputType = question.inputType;

                        // Handle checkbox input type
                        if (inputType === 'checkbox') {
                            setAnswers((prevAnswers) => {
                                const currentAnswers = prevAnswers[questionId] || [];
                                if (currentAnswers.includes(value)) {
                                    // If value is already present, remove it
                                    return {
                                        ...prevAnswers,
                                        [questionId]: currentAnswers.filter(answer => answer !== value),
                                    };
                                } else {
                                    // If value is not present, add it
                                    return {
                                        ...prevAnswers,
                                        [questionId]: [...currentAnswers, value],
                                    };
                                }
                            });
                        } else if (inputType === 'radio') {
                            // Handle radio input type
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
            <div className="mt-12 max-w-md mx-auto border p-8 rounded-3xl text-white">
                <h2 className="text-3xl mb-4">Quiz Completed!</h2>
                <div>
                    {Object.entries(answers).map(([questionId, answer]) => {
                        // Extract the question based on the questionId
                        const question = quizData
                            .flatMap(q => q.content)
                            .flatMap(item => item.question || []) // Flatten the question arrays
                            .find(q => q.id === questionId); // Find the specific question
    
                        // Check if the question is found
                        if (!question) {
                            console.error("Question not found for the provided questionId:", questionId);
                            return null; // Skip rendering if not found
                        }
    
                        return (
                            <div key={questionId}>
                                <p className="font-bold">{question.question}</p>
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
