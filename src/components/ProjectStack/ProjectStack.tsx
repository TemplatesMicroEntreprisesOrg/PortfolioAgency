"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";
import NextSvg from "./svg/NextSvg";
import ReactSvg from "./svg/ReactSvg";
import StrapiSvg from "./svg/StrapiSvg";
import NodeSvg from "./svg/NodeSvg";
import ShopifySvg from "./svg/ShopifySvg";
import PostgreeSvg from "./svg/PostgreeSvg";
import Bubble from "../Bubble/Bubble";

const bubbles = [
  { key: "next", component: <NextSvg /> },
  { key: "react", component: <ReactSvg /> },
  { key: "strapi", component: <StrapiSvg /> },
  { key: "node", component: <NodeSvg /> },
  { key: "shopify", component: <ShopifySvg /> },
  { key: "postgree", component: <PostgreeSvg /> },
];

function ProjectStack() {
  const { selectedLanguage } = useLanguage();

  const bubbleVariants = {
    hidden: (index: number) => {
      const directions = ["left", "right", "top", "bottom"];
      const direction = directions[index % directions.length];

      switch (direction) {
        case "left":
          return { opacity: 0, x: -100 };
        case "right":
          return { opacity: 0, x: 100 };
        case "top":
          return { opacity: 0, y: -100 };
        case "bottom":
          return { opacity: 0, y: 100 };
        default:
          return { opacity: 0, y: 100 };
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {translations[selectedLanguage].stack.title}
      </motion.h2>

      <motion.div
        className="stackContainer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        style={{
          overflow: "hidden",
        }}
      >
        <motion.div className="stackLine" variants={containerVariants}>
          {bubbles.map((item, index) => (
            <motion.div key={item.key} variants={bubbleVariants} custom={index}>
              <Bubble>{item.component}</Bubble>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectStack;
