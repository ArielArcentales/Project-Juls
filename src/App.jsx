/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Garden } from './Garden';
import { Surprise } from './Surprise';

function App() {
  // Configuración de la animación (Aparece suave y crece un poquito)
  const textVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden', color: '#fff' }}> 
      
      {}
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
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          style={{ 
            fontSize: '3.5rem',
            margin: '0 0 30px 0', 
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.1',
            textShadow: '0 4px 10px rgba(255,255,255,0.1)'
          }} 
        >
          Me has preguntado
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.0 }} 
          style={{ 
            fontSize: '1.8rem', 
            opacity: 0.9, 
            maxWidth: '80%', 
            lineHeight: '1.4',
            fontFamily: 'Lato, sans-serif',
            color: '#e0e0e0'
          }}
        >
          ¿por qué nunca te regalo flores?
        </motion.p>

        {}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 3.5, duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '50px', fontSize: '2rem', opacity: 0.5 }}
        >
          ↓
        </motion.div>

      </section>

      {}
      <Garden />

      {}
      <section style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        zIndex: 20,
        position: 'relative',
        backgroundColor: '#050505' 
      }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
        >
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px', 
            fontFamily: 'Lato, sans-serif',
            color: '#ccc' 
          }}>
            La verdad odio ver...
          </p>
          
          <h2 style={{ 
            fontSize: '2rem', 
            fontFamily: 'Playfair Display, serif',
            color: '#ffcccb',
            lineHeight: '1.4',
            maxWidth: '600px'
          }}>
            ...cómo algo tan hermoso se marchita en unos días.
          </h2>
        </motion.div>

      </section>

      {}
      <Surprise />

    </div>
  )
}

export default App