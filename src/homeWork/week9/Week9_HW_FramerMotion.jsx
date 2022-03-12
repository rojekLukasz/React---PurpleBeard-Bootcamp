import React from 'react';
import { motion } from "framer-motion";

import HWNavBar from '../_HWNavBar';
import './Week9_HW_Style.css';

function Week9_HW_FramerMotion() {
  return (
    <div className="app-container">
      <HWNavBar />
      <div className="content">
        <motion.h2
        initial={{z: -1000, opacity: 0}}
        animate={{x: 10, y: 10, color: 'lightyellow', scale: 2.5, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        >Hello</motion.h2>
        <motion.div id='box'
        initial={{x: '-100vh'}}
        animate={{x: 500, y: 50}}
        transition={{delay: 1.5}}
        >
          <motion.button id='doNot'
          onClick={() => alert('You are very brave!')}
          animate={{y: 100, opacity: 1}}
          whileHover={{scale: 1.1}}
          >Do not click !!</motion.button>
      </motion.div>
        
      </div>
    </div>
  );
}

export default Week9_HW_FramerMotion;
