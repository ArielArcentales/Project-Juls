/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';

const myFlowers = [
  { id: 1, src: '/jardin/sol.png', scale: 1.4 },
  { id: 2, src: '/jardin/luna.png', scale: 0.8 },
  { id: 3, src: '/jardin/abeja1.png', scale: 0.6 },
  { id: 4, src: '/jardin/mariposa1.png', scale: 0.6 },
  { id: 5, src: '/jardin/girasol.png', scale: 1.3 },
  { id: 6, src: '/jardin/lirio.png', scale: 1.1 },
  { id: 7, src: '/jardin/lirio2.png', scale: 1.1 },
  { id: 8, src: '/jardin/flora1.png', scale: 1 },
  { id: 9, src: '/jardin/florb1.png', scale: 1 },
  { id: 10, src: '/jardin/florr1.png', scale: 1 },
];

export const Garden = () => {
  const [positions, setPositions] = useState(() => {
    return myFlowers.map(() => ({
      top: Math.random() * 70 + 10 + '%',
      left: Math.random() * 80 + 5 + '%',
      rotation: Math.random() * 360,
    }));
  });

  const shufflePositions = () => {
    setPositions(
      myFlowers.map(() => ({
        top: Math.random() * 70 + 10 + '%',
        left: Math.random() * 80 + 5 + '%',
        rotation: Math.random() * 360,
      }))
    );
  };

  if (positions.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#050505',
        zIndex: 50,
        overflow: 'hidden',
        touchAction: 'none'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          top: '10%',
          width: '100%',
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          color: '#fdfbf7',
          fontSize: '1.5rem',
          opacity: 0.8,
          marginBottom: '5px'
        }}>
          Este es tu jardín eterno
        </h2>
        <p style={{
          fontFamily: 'sans-serif',
          color: '#ccc',
          fontSize: '0.9rem',
          opacity: 0.6
        }}>
          (Muévelas y crea tu propio mundo)
        </p>
      </motion.div>

      {myFlowers.map((item, index) => (
        <motion.img
          key={item.id}
          src={item.src}
          drag
          dragMomentum={false}
          whileDrag={{ scale: item.scale * 1.2, zIndex: 100, cursor: 'grabbing' }}
          whileTap={{ scale: item.scale * 1.1 }}
          style={{
            position: 'absolute',
            top: positions[index].top,
            left: positions[index].left,
            rotate: positions[index].rotation,
            scale: item.scale,
            width: '120px',
            maxWidth: '30vw',
            cursor: 'grab',
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))',
            userSelect: 'none'
          }}
        />
      ))}

      <button 
        onClick={shufflePositions}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          padding: '8px 15px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          zIndex: 10,
          backdropFilter: 'blur(5px)'
        }}
      >
        Reordenar ↺
      </button>
      
    </motion.div>
  );
};