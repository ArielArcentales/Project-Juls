/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const Surprise = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // 1. Lanza el confeti
    const duration = 3000;
    const end = Date.now() + duration;

    // Lanza corazones y colores
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#ff69b4', '#ffa500']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#ff69b4', '#ffa500']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // 2. Abre la carta
    setIsOpen(true);
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #000000, #1a0505)' // Degradado sutil rojizo al final
    }}>
      
      {!isOpen ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          style={{
            padding: '15px 40px',
            fontSize: '1.2rem',
            background: '#e63946',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(230, 57, 70, 0.5)',
            fontFamily: 'Playfair Display, serif'
          }}
        >
          Regar el Jardín Final ❤️
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: '#fff',
            color: '#333',
            padding: '40px',
            borderRadius: '10px',
            maxWidth: '80%',
            textAlign: 'center',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.2)'
          }}
        >
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#e63946', marginTop: 0 }}>
            Para mi amor
          </h2>
          <p style={{ lineHeight: '1.6', fontSize: '1.1rem', fontStyle: 'italic' }}>
            "Las flores reales se marchitan, pero este código vivirá para siempre en la nube.
            Cada vez que entres aquí, estas flores volverán a nacer para ti.
            Te amo hoy y siempre."
          </p>
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>- Ariel</p>
        </motion.div>
      )}
    </div>
  );
};