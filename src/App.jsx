/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
// import { Garden } from './Garden'; // <--- JARDÍN DESACTIVADO POR AHORA
import { Surprise } from './Surprise';
import { MusicPlayer } from './MusicPlayer';
import { Story } from './Story';

function App() {
  // Configuración de animaciones
  const textVariant = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } } 
  };

  const formalStyle = { 
    fontFamily: '"Playfair Display", serif', 
    color: '#fdfbf7', 
    textAlign: 'center', 
    lineHeight: '1.4' 
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}> 
      
      {/* MÚSICA DE FONDO */}
      <MusicPlayer />

      {/* --- BLOQUE 1: LA PREGUNTA Y LA RESPUESTA --- */}
      <section style={{ 
        minHeight: '100vh', // Ocupa la primera pantalla completa
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '40px 20px', 
        position: 'relative', 
        zIndex: 10 
      }}>
        
        {/* Título: Me has preguntado */}
        <motion.h1 
          variants={textVariant} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          style={{ ...formalStyle, fontSize: '2.5rem', marginBottom: '20px', fontWeight: '400' }}
        >
          Me has preguntado...
        </motion.h1>

        {/* Subtítulo: Por qué no regalo flores */}
        <motion.p 
          variants={textVariant} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ ...formalStyle, fontSize: '1.3rem', maxWidth: '80%', fontStyle: 'italic', marginBottom: '60px', color: '#ccc' }}
        >
          ...por qué nunca te regalo flores.
        </motion.p>

        {/* La Respuesta (Directa al grano) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1.5 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <p style={{ ...formalStyle, fontSize: '1.5rem', marginBottom: '20px', opacity: 0.9 }}>
            La verdad es que odio ver...
          </p>
          <h2 style={{ 
            ...formalStyle, 
            fontSize: '1.8rem', 
            fontWeight: '400', 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            borderBottom: '1px solid rgba(255,255,255,0.2)', 
            padding: '20px 0' 
          }}>
            ...cómo algo tan hermoso se marchita en unos días.
          </h2>
        </motion.div>

        {/* El Lobo */}
        <motion.img 
          src="/image/lobo1.png" 
          alt="lobo"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 1 }}
          style={{ 
            width: '160px', 
            height: 'auto', 
            marginTop: '50px', 
            borderRadius: '12px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)' 
          }} 
        />

        {/* Flecha para indicar que baje */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: [0, 10, 0] }} 
          transition={{ delay: 4, duration: 2, repeat: Infinity }} 
          style={{ marginTop: '50px', color: '#fdfbf7', fontSize: '1.5rem', opacity: 0.6 }}
        >
          ↓
        </motion.div>
      </section>


      {/* --- BLOQUE 2: EL PUENTE HACIA LA HISTORIA --- */}
      <section style={{ 
        minHeight: '50vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px' 
      }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ 
            ...formalStyle, 
            fontSize: '2rem', 
            maxWidth: '600px',
            lineHeight: '1.6'
          }}
        >
          Pero antes de mostrarte mi regalo,<br/>
          <span style={{ color: '#ffcccb', fontStyle: 'italic' }}>déjame contarte una historia para que lo entiendas.</span>
        </motion.h2>
      </section>


      {/* --- BLOQUE 3: LA HISTORIA (ÁLBUM) --- */}
      <Story />


      {/* --- BLOQUE 4: LA SORPRESA FINAL --- */}
      <Surprise />

    </div>
  )
}

export default App;