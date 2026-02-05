/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';

const flowerMenu = [
  { src: '/jardin/sol.png', scale: 1.4, id: 'sol' },
  { src: '/jardin/luna.png', scale: 0.8, id: 'luna' },
  { src: '/jardin/abeja1.png', scale: 0.6, id: 'abeja' },
  { src: '/jardin/mariposa1.png', scale: 0.6, id: 'mariposa' },
  { src: '/jardin/girasol.png', scale: 1.2, id: 'girasol' },
  { src: '/jardin/lirio.png', scale: 1.1, id: 'lirio' },
  { src: '/jardin/lirio2.png', scale: 1.1, id: 'lirio2' },
  { src: '/jardin/flora1.png', scale: 1, id: 'flora' },
  { src: '/jardin/florb1.png', scale: 1, id: 'florb' },
  { src: '/jardin/florr1.png', scale: 1, id: 'florr' },
];

const createFlowerItem = (item) => {
  return {
    uniqueId: Math.random().toString(36).substring(2, 11) + Date.now().toString(36),
    src: item.src,
    scale: item.scale,
    top: 40 + (Math.random() * 10 - 5) + '%',
    left: 45 + (Math.random() * 10 - 5) + '%',
    rotation: (Math.random() * 20) - 10,
  };
};

export const Garden = () => {
  const [plantedItems, setPlantedItems] = useState([]);

  const addItem = (item) => {
    const newItem = createFlowerItem(item);
    setPlantedItems((prev) => [...prev, newItem]);
  };

  const clearGarden = () => {
    setPlantedItems([]);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#050505',
      zIndex: 50,
      overflow: 'hidden',
      touchAction: 'none'
    }}>
      
      <div style={{ width: '100%', height: '82%', position: 'relative' }}>
        
        {plantedItems.length === 0 && (
          <div style={{ 
            position: 'absolute', 
            top: '40%', 
            width: '100%', 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.4)', 
            fontFamily: '"Playfair Display", serif', 
            pointerEvents: 'none',
            padding: '0 20px'
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Tu jardín está vacío...</p>
            <p style={{ fontSize: '1rem', opacity: 0.7 }}>Toca los íconos abajo para empezar a plantar 🌱</p>
          </div>
        )}

        {plantedItems.map((item) => (
          <motion.img
            key={item.uniqueId}
            src={item.src}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: item.scale, opacity: 1 }}
            drag
            dragMomentum={false}
            whileDrag={{ scale: item.scale * 1.2, zIndex: 100, cursor: 'grabbing' }}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              rotate: item.rotation,
              width: '120px',
              maxWidth: '30vw',
              cursor: 'grab',
              filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.5))'
            }}
          />
        ))}
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '18%',
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        overflowX: 'auto',
        gap: '15px',
        zIndex: 60
      }}>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={clearGarden}
          style={{
            minWidth: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '1px solid #ff6b6b',
            backgroundColor: 'transparent',
            color: '#ff6b6b',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          🗑️
        </motion.button>

        <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', marginRight: '10px' }}></div>

        {flowerMenu.map((flower, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.8 }}
            onClick={() => addItem(flower)}
            style={{
              minWidth: '60px',
              height: '60px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img 
              src={flower.src} 
              alt="icono" 
              style={{ width: '70%', height: '70%', objectFit: 'contain' }} 
            />
          </motion.div>
        ))}
        
        <div style={{ minWidth: '20px' }}></div>
      </div>

    </div>
  );
};