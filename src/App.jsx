/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Garden } from './Garden';
import { Surprise } from './Surprise';

function App() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}> 
      
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
          style={{ 
            fontSize: '2.2rem', // Ajustado para verse elegante en móvil
            margin: '0 0 20px 0', 
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.2'
          }} 
        >
          Siempre me has preguntado...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }} 
          style={{ 
            fontSize: '1.1rem', 
            opacity: 0.8, 
            maxWidth: '80%', // Evita que el texto toque los bordes
            lineHeight: '1.6',
            fontFamily: 'Lato, sans-serif'
          }}
        >
          ...por qué nunca te regalo flores que se marchitan.
        </motion.p>

      </section>

      {/* --- SECCIÓN 2: EL JARDÍN (SCROLL) --- */}
      <Garden />

      {/* --- SECCIÓN 3: LA SORPRESA FINAL --- */}
      <Surprise />

    </div>
  )
}

export default App