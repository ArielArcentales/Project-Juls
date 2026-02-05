/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MusicPlayer } from './MusicPlayer';
import { Story } from './Story';
import { Garden } from './Garden'; // <--- Importamos el Jardín

function App() {
  // Estado para controlar cuándo mostramos el jardín
  const [showGarden, setShowGarden] = useState(false);

  const textVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2 } } };
  const formalStyle = { fontFamily: '"Playfair Display", serif', color: '#fdfbf7', textAlign: 'center', lineHeight: '1.4' };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}> 
      
      <MusicPlayer />

      <AnimatePresence mode='wait'>
        
        {/* ESCENA 1: LA HISTORIA (Se oculta al activar el jardín) */}
        {!showGarden && (
          <motion.div
            key="story-mode"
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* INTRODUCCIÓN */}
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', position: 'relative' }}>
              <motion.h1 variants={textVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ ...formalStyle, fontSize: '2.5rem', marginBottom: '20px', fontWeight: '400' }}>Me has preguntado...</motion.h1>
              <motion.p variants={textVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} style={{ ...formalStyle, fontSize: '1.3rem', maxWidth: '80%', fontStyle: 'italic', marginBottom: '60px', color: '#ccc' }}>...por qué nunca te regalo flores.</motion.p>
              
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5, duration: 1.5 }} style={{ maxWidth: '700px', margin: '0 auto' }}>
                <p style={{ ...formalStyle, fontSize: '1.5rem', marginBottom: '20px', opacity: 0.9 }}>La verdad es que odio ver...</p>
                <h2 style={{ ...formalStyle, fontSize: '1.8rem', fontWeight: '400', borderTop: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '20px 0' }}>...cómo algo tan hermoso se marchita en unos días.</h2>
              </motion.div>

              <motion.img src="/image/lobo1.png" alt="lobo" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.5, duration: 1 }} style={{ width: '160px', height: 'auto', marginTop: '50px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} />
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ delay: 4, duration: 2, repeat: Infinity }} style={{ marginTop: '50px', color: '#fdfbf7', fontSize: '1.5rem', opacity: 0.6 }}>↓</motion.div>
            </section>

            {/* PUENTE */}
            <section style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
              <h2 style={{ ...formalStyle, fontSize: '2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                Pero antes de mostrarte mi regalo,<br/>
                <span style={{ color: '#ffcccb', fontStyle: 'italic' }}>déjame contarte una historia para que lo entiendas.</span>
              </h2>
            </section>

            {/* HISTORIA SCRAPBOOK */}
            <Story />

            {/* BOTÓN FINAL */}
            <section style={{ minHeight: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '100px' }}>
               <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowGarden(true)} // <--- ESTO ACTIVA EL JARDÍN
                  style={{
                    padding: '20px 50px',
                    fontSize: '1.5rem',
                    backgroundColor: '#e63946',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontFamily: '"Playfair Display", serif',
                    boxShadow: '0 10px 30px rgba(230, 57, 70, 0.4)'
                  }}
                >
                  Ver tu regalo 🎁
                </motion.button>
            </section>
          </motion.div>
        )}

        {/* ESCENA 2: EL JARDÍN (Se muestra solo al final) */}
        {showGarden && (
          <Garden />
        )}

      </AnimatePresence>
    </div>
  )
}

export default App;