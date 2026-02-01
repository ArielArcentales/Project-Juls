import { motion } from 'framer-motion'; // <--- Aquí la importamos

function App() {
  return (
    <div style={{ paddingBottom: '100px' }}> 
      
      {/* SECCIÓN 1: EL GANCHO */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        
        {/* Fíjate aquí: Usamos 'motion.h1', por eso deja de dar error */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ fontSize: '2rem', margin: 0 }} 
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
            maxWidth: '300px'
          }}
        >
          ...por qué nunca te regalo flores.
        </motion.p>

        {/* La flechita animada */}
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
            fontSize: '1.5rem'
          }}
        >
          ↓
        </motion.div>

      </section>

      {/* Espacio extra para probar el scroll */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Aquí comenzará la magia...</p>
      </section>

    </div>
  )
}

export default App