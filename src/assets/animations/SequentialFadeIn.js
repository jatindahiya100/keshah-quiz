import { motion } from 'framer-motion';
import { Children, cloneElement, useState, useEffect } from 'react';

const SequentialFadeIn = ({ children }) => {
    const [visibleIndex, setVisibleIndex] = useState(-1);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleIndex((prevIndex) => {
                if (prevIndex < Children.count(children) - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(timer);
                    return prevIndex;
                }
            });
        }, 400); // Change this value to adjust the delay between elements
        return () => clearInterval(timer);
    }, [children]);

    const elements = Children.map(children, (child, index) => {
        const isVisible = index <= visibleIndex;
        return (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ duration: 0.5 }}
                style={{
                    visibility: isVisible ? 'visible' : 'hidden',
                    width: 'auto',
                }}
            >
                {cloneElement(child, { key: index })}
            </motion.div>
        );
    });

    return elements;
};

export default SequentialFadeIn;
