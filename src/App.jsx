/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Countdown } from './Countdown';

const FINAL_PROJECT_URL = "https://project-juls.vercel.app/"; 

function App() {
  const [isTimeUp, setIsTimeUp] = useState(false);

  return (
    <div style={{ 
      backgroundColor: '#000000',
      minHeight: '100vh', 
      overflowX: 'hidden',
      fontFamily: '"Playfair Display", serif',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}> 
      
      <AnimatePresence mode='wait'>
        
        {}
        {!isTimeUp && (
          <Countdown key="timer" onComplete={() => setIsTimeUp(true)} />
        )}

        {/* FASE 2: ENLACE AL REGALO FINAL */}
        {isTimeUp && (
          <motion.div
            key="link-screen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{ textAlign: 'center', padding: '20px' }}
          >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '400' }}>
              La espera ha terminado.
            </h1>
            
            <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '50px', fontStyle: 'italic' }}>
              Ya puedes ver lo que preparé para ti.
            </p>

            <motion.a
              href={FINAL_PROJECT_URL}
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                padding: '20px 50px',
                fontSize: '1.2rem',
                border: '1px solid #ffffff',
                color: '#ffffff',
                borderRadius: '5px',
                letterSpacing: '2px',
                transition: 'all 0.3s ease'
              }}
            >
              ABRIR
            </motion.a>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}

export default App;