"use client";
import React from "react";
import { delay, motion } from "framer-motion";
export default function Text({ word }) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.h1
      className="font-bold text-4xl"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {word.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>
            {" "}
            {char}{" "}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
