/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';


const storyData = [
  { id: 1, img: '/image/foto1.jpg', text: "Todo comenzó con una coincidencia, un momento simple que cambió mi suerte." },
  { id: 2, img: '/image/foto2.jpg', text: "Poco a poco, los días normales se transformaron en recuerdos favoritos." },
  { id: 3, img: '/image/foto3.jpg', text: "Hemos compartido risas que me reinician la vida." },
  { id: 4, img: '/image/foto4.jpg', text: "Y también hemos superado tormentas que nos hicieron más fuertes." },
  { id: 5, img: '/image/foto5.jpg', text: "Me enseñaste que el amor no es solo un sentimiento, es una decisión de cada día." },
  { id: 6, img: '/image/foto6.jpg', text: "Admiro tu luz, tu fe y esa forma única que tienes de ver el mundo." },
  { id: 7, img: '/image/foto7.jpg', text: "Contigo, cualquier lugar se siente como estar en casa." },
  { id: 8, img: '/image/foto8.jpg', text: "Por eso, quería darte algo que dure tanto como lo que siento por ti..." }
];


const StoryItem = ({ data }) => {
  return (
    <section style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      scrollSnapAlign: 'center' 
    }}>
      
      {/* Contenedor de la Imagen con animación */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }} 
        style={{
          width: '90%',
          maxWidth: '500px',
          height: 'auto',
          maxHeight: '60vh', 
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          marginBottom: '30px'
        }}
      >
        <img 
          src={data.img} 
          alt={`Recuerdo ${data.id}`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </motion.div>

      {/* Texto con animación */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontFamily: '"Playfair Display", serif',
          color: '#fdfbf7',
          fontSize: '1.4rem',
          textAlign: 'center',
          maxWidth: '80%',
          lineHeight: '1.5',
          textShadow: '0 2px 5px rgba(0,0,0,0.8)',
          backgroundColor: 'rgba(0,0,0,0.3)', 
          padding: '15px',
          borderRadius: '10px'
        }}
      >
        {data.text}
      </motion.h3>

    </section>
  );
};

export const Story = () => {
  return (
    <div style={{ position: 'relative', zIndex: 15, paddingBottom: '50px' }}>
      {storyData.map((item) => (
        <StoryItem key={item.id} data={item} />
      ))}
    </div>
  );
};