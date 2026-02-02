/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const Surprise = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formalStyle = { fontFamily: '"Playfair Display", serif', color: '#fdfbf7', textAlign: 'center' };

  const handleClick = () => {
    setIsLoading(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#ffcccb', '#fdfbf7', '#e63946'], zIndex: 30 });
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({ pathLength: 1.1, opacity: 1, transition: { pathLength: { delay: i * 0.5, duration: 3, ease: "easeInOut" }, opacity: { delay: i * 0.5, duration: 0.01 } } })
  };

  return (
    <section style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 20px' }}>
      {!isLoading && (
        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleClick}
          style={{ padding: '15px 40px', fontSize: '1.2rem', backgroundColor: '#e63946', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: '"Playfair Display", serif', boxShadow: '0 10px 30px rgba(230, 57, 70, 0.3)' }}
        >
          Regar el Jardín Final ❤️
        </motion.button>
      )}

      {isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.svg width="100" height="100" viewBox="0 0 100 100">
            <motion.path d="M50 90 Q 50 60 50 50" stroke="#a3d9a5" strokeWidth="3" fill="transparent" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={0} />
            <motion.path d="M50 70 Q 30 60 40 50" stroke="#a3d9a5" strokeWidth="3" fill="transparent" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={0.5} />
            <motion.path d="M50 50 C 30 30, 30 10, 50 20 C 70 10, 70 30, 50 50" stroke="#ffcccb" strokeWidth="3" fill="transparent" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={1} />
            <motion.circle cx="50" cy="35" r="3" fill="#ffcccb" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3.5 }} />
          </motion.svg>
          <h3 style={{ ...formalStyle, fontSize: '1.5rem', marginTop: '10px' }}>En camino...</h3>
          <p style={{ ...formalStyle, fontSize: '0.9rem', opacity: 0.7, fontFamily: 'Lato, sans-serif' }}>(Preparando la primavera)</p>
        </motion.div>
      )}
    </section>
  );
};