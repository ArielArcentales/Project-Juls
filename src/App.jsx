/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Garden } from './Garden';
import { Surprise } from './Surprise';

function App() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh' }}> 
      
      {/* --- SECCIÓN 1: INTRODUCCIÓN --- */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ fontSize: '2.5rem', margin: 0, fontFamily: 'Playfair Display, serif' }} 
        >
          Siempre me has preguntado...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }} 
          style={{ 
            fontSize: '1.2rem', 
            marginTop: '20px', 
            opacity: 0.8, 
            maxWidth: '300px',
            lineHeight: '1.6'
          }}
        >
          ...por qué nunca te regalo flores que se marchitan.
        </motion.p>

        {/* Indicador de scroll animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }} 
          transition={{ 
            delay: 4, 
            duration: 1.5, 
            repeat: Infinity 
          }}
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            opacity: 0.7
          }}
        >
          ↓
        </motion.div>

      </section>

      {/* --- SECCIÓN 2: EL JARDÍN (SCROLL) --- */}
      <Garden />

      {/* --- SECCIÓN 3: LA SORPRESA FINAL --- */}
      <Surprise />

    </div>
  )
}

export default App