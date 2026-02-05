/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MusicPlayer } from './MusicPlayer';
import { Story } from './Story';
import { Garden } from './Garden';

function App() {
  const [showGarden, setShowGarden] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } }
  };

  const fontStyle = {
    fontFamily: '"Playfair Display", serif',
    color: '#ffffff',
    textAlign: 'center',
  };

  return (
    <div style={{ 
      backgroundColor: '#000000',
      minHeight: '100vh', 
      overflowX: 'hidden',
      fontFamily: '"Playfair Display", serif'
    }}> 
      
      <MusicPlayer />

      <AnimatePresence mode='wait'>
        
        {!showGarden && (
          <motion.div
            key="story-mode"
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <section style={{ 
              minHeight: '100vh', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: '40px 20px' 
            }}>
              
              <motion.h1 
                variants={fadeInUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                style={{ ...fontStyle, fontSize: '2.2rem', marginBottom: '20px', fontWeight: '400' }}
              >
                Me has preguntado
              </motion.h1>

              <motion.p 
                variants={fadeInUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                style={{ ...fontStyle, fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '60px' }}
              >
                por qué nunca te regalo flores.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.5, duration: 1.5 }} 
                style={{ maxWidth: '600px', margin: '0 auto' }}
              >
                <p style={{ ...fontStyle, fontSize: '1.4rem', marginBottom: '30px', opacity: 0.9 }}>
                  La verdad es que odio ver
                </p>
                <h2 style={{ 
                  ...fontStyle, 
                  fontSize: '1.6rem', 
                  borderTop: '1px solid rgba(255,255,255,0.3)', 
                  borderBottom: '1px solid rgba(255,255,255,0.3)', 
                  padding: '30px 0',
                  lineHeight: '1.5'
                }}>
                  cómo algo tan hermoso<br/>se marchita en unos días.
                </h2>
              </motion.div>

              <motion.img 
                src="/image/lobo1.png" 
                alt="lobo" 
                initial={{ opacity: 0, scale: 0.9, filter: 'grayscale(100%)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.2 }} 
                style={{ 
                  width: '180px', 
                  height: 'auto', 
                  marginTop: '60px', 
                  borderRadius: '4px',
                  boxShadow: '0 20px 50px rgba(255,255,255,0.05)'
                }} 
              />
            </section>

            <section style={{ 
              minHeight: '40vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: '40px' 
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '40px',
                  maxWidth: '500px',
                  backgroundColor: 'rgba(20,20,20,0.5)'
                }}
              >
                <p style={{ 
                  ...fontStyle, 
                  fontSize: '1.5rem', 
                  lineHeight: '1.6', 
                  margin: 0 
                }}>
                  Por eso preparé algo que va a durarte eternamente siempre
                </p>
              </motion.div>
            </section>

            <section style={{ 
              minHeight: '30vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: '20px' 
            }}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                style={{
                  ...fontStyle,
                  fontSize: '1.8rem',
                  fontWeight: '400',
                  maxWidth: '600px',
                  lineHeight: '1.6'
                }}
              >
                Pero antes de entregártelo, permíteme recorrer brevemente nuestra historia
              </motion.h3>
            </section>

            <Story />

            <section style={{ 
              minHeight: '50vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingBottom: '100px' 
            }}>
               <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowGarden(true)}
                  style={{
                    padding: '18px 40px',
                    fontSize: '1.3rem',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '1px solid #ffffff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontFamily: '"Playfair Display", serif',
                    letterSpacing: '2px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  MIRA TU REGALO
                </motion.button>
            </section>
          </motion.div>
        )}

        {showGarden && (
          <Garden onExit={() => setShowGarden(false)} />
        )}

      </AnimatePresence>
    </div>
  )
}

export default App;