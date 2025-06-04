'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Framer Motion?",
    answer: "Framer Motion is a popular animation library for React.",
  },
  {
    question: "How do I install Framer Motion?",
    answer: "You can install it using npm: npm install framer-motion.",
  },
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="mx-auto p-6 bg-white w-full mb-16   ">
      <div className="container flex max-sm:flex-col mx-auto gap-9 items-center justify-between">
        <div className="lft">
          <h3 className=" text-[#121212] rounded-4xl w-fit text-[16px] mb-3 ">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-3.5">
            Your Questions, Answered
          </h1>
        </div>

        <div className="rgt md:w-1/2">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              index={index}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const Accordion = ({
  question,
  answer,
  index,
  expandedIndex,
  setExpandedIndex,
}) => {
  const isOpen = index === expandedIndex;

  return (
    <div className="mb-3">
      <motion.div
        onClick={() => setExpandedIndex(isOpen ? null : index)}
        className="cursor-pointer p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
        whileHover={{ scale: 1.02, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={{ backgroundColor: isOpen ? "#e5e7eb" : "#f3f4f6" }}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          ▼
        </motion.span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.8,
              duration: 0.4,
            }}
            className="overflow-hidden p-4 bg-gray-50 rounded-lg text-gray-700"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
