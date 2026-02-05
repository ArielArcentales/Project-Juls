/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
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
    uniqueId: Math.random().toString(36).substring(2, 9) + Date.now().toString(36),
    src: item.src,
    scale: item.scale,
    top: 40 + (Math.random() * 20 - 10) + '%',
    left: 40 + (Math.random() * 20 - 10) + '%',
    rotation: (Math.random() * 30) - 15,
  };
};

export const Garden = () => {
  const [plantedItems, setPlantedItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addItem = (item) => {
    const newItem = createFlowerItem(item);
    setPlantedItems((prev) => [...prev, newItem]);
  };

  const removeLastItem = () => {
    setPlantedItems((prev) => prev.slice(0, -1));
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
      
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        
        {plantedItems.length === 0 && (
          <div style={{ 
            position: 'absolute', 
            top: '45%', 
            width: '100%', 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.3)', 
            fontFamily: '"Playfair Display", serif', 
            pointerEvents: 'none'
          }}>
            <p>Toca el paisaje (🌄) para empezar</p>
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

      {!isMenuOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(true)}
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            fontSize: '2rem',
            cursor: 'pointer',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
          }}
        >
          🌄
        </motion.button>
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '280px',
              maxWidth: '80vw',
              height: '100%',
              backgroundColor: 'rgba(20, 20, 20, 0.9)',
              backdropFilter: 'blur(15px)',
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              zIndex: 70,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ color: '#fdfbf7', fontFamily: '"Playfair Display", serif', margin: 0 }}>Colección</h3>
              
              <button 
                onClick={() => setIsMenuOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ 
              flex: 1, 
              overflowY: 'auto', 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '15px',
              paddingBottom: '20px'
            }}>
              {flowerMenu.map((flower, index) => (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addItem(flower)}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.05)',
                    aspectRatio: '1/1'
                  }}
                >
                  <img 
                    src={flower.src} 
                    alt="flor" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                </motion.div>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={removeLastItem}
              disabled={plantedItems.length === 0}
              style={{
                width: '100%',
                padding: '15px',
                marginTop: '10px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 77, 77, 0.3)',
                backgroundColor: 'rgba(255, 77, 77, 0.1)',
                color: '#ff6b6b',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                opacity: plantedItems.length === 0 ? 0.5 : 1
              }}
            >
              <span>↩️</span> Deshacer último
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};