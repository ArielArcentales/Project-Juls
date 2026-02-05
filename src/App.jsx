/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Garden } from './Garden';
import { Surprise } from './Surprise';
import { MusicPlayer } from './MusicPlayer';
import { Story } from './Story'; // <--- IMPORTANTE: Importar la historia

function App() {
  const textVariant = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } } };
  const formalStyle = { fontFamily: '"Playfair Display", serif', color: '#fdfbf7', textAlign: 'center', lineHeight: '1.4' };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}> 
      
      {/* MÚSICA DE FONDO */}
      <MusicPlayer />

      {/* 1. INTRODUCCIÓN */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', position: 'relative', zIndex: 10 }}>
        <motion.h1 variants={textVariant} initial="hidden" animate="visible" transition={{ delay: 0.5 }} style={{ ...formalStyle, fontSize: '3rem', margin: '0 0 40px 0', fontWeight: '400' }}>Me has preguntado...</motion.h1>
        <motion.p variants={textVariant} initial="hidden" animate="visible" transition={{ delay: 2.0 }} style={{ ...formalStyle, fontSize: '1.5rem', maxWidth: '80%', fontStyle: 'italic' }}>...por qué nunca te regalo flores.</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ delay: 3.5, duration: 2, repeat: Infinity }} style={{ position: 'absolute', bottom: '50px', color: '#fdfbf7', fontSize: '1.5rem', opacity: 0.6 }}>↓</motion.div>
      </section>

      {/* 2. LA HISTORIA (Tus 8 fotos) */}
      <Story />

      {/* 3. EL JARDÍN (Las flores aparecen después de las fotos) */}
      <Garden />

      {/* 4. MENSAJE FINAL + LOBO */}
      <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px', zIndex: 20, position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <p style={{ ...formalStyle, fontSize: '1.8rem', marginBottom: '30px', opacity: 0.9 }}>La verdad es que odio ver...</p>
          <h2 style={{ ...formalStyle, fontSize: '2.2rem', maxWidth: '700px', fontWeight: '400', borderTop: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '20px 0' }}>...cómo algo tan hermoso se marchita en unos días.</h2>

          <motion.img 
            src="/image/lobo1.png" 
            alt="lobo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ width: '180px', height: 'auto', margin: '50px 0 30px 0', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }} 
          />

        </motion.div>
      </section>

      {/* 5. EL REGALO FINAL (Botón y cartas) */}
      <Surprise />

    </div>
  )
}

export default App;