/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const storyData = [
  { 
    id: 1, 
    img: '/image/foto1.jpg', 
    text: "Todo comenzó con una coincidencia, un momento simple que cambió mi suerte.",
    decorations: [
      { src: '/image/papel1.png', css: { top: '-30px', left: '-20px', width: '140px', zIndex: -1, rotate: '-10deg' } },
      { src: '/image/mariposa1.png', css: { bottom: '-15px', right: '-10px', width: '60px', zIndex: 1, rotate: '15deg' } }
    ]
  },
  { 
    id: 2, 
    img: '/image/foto2.jpg', 
    text: "Poco a poco, los días normales se transformaron en recuerdos favoritos.",
    decorations: [
      { src: '/image/ramo1.png', css: { top: '-40px', right: '-30px', width: '120px', zIndex: -1, rotate: '20deg' } },
      { src: '/image/flor1.png', css: { bottom: '-20px', left: '-10px', width: '70px', zIndex: 1, rotate: '-15deg' } }
    ]
  },
  { 
    id: 3, 
    img: '/image/foto3.jpg', 
    text: "Hemos compartido risas que me reinician la vida.",
    decorations: [
      { src: '/image/papel2.png', css: { bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '180px', zIndex: -1 } },
      { src: '/image/corazon1.png', css: { top: '-15px', left: '-15px', width: '50px', zIndex: 1, rotate: '-10deg' } }
    ]
  },
  { 
    id: 4, 
    img: '/image/foto4.jpg', 
    text: "Y también hemos superado tormentas que nos hicieron más fuertes.",
    decorations: [
      { src: '/image/ramo2.png', css: { bottom: '-30px', right: '-20px', width: '130px', zIndex: 1, rotate: '-5deg' } },
      { src: '/image/luna.png', css: { top: '-30px', left: '-20px', width: '60px', zIndex: -1, rotate: '-15deg' } }
    ]
  },
  { 
    id: 5, 
    img: '/image/foto5.jpg', 
    text: "Me enseñaste que el amor no es solo un sentimiento, es una decisión de cada día.",
    decorations: [
      { src: '/image/flor2.png', css: { top: '-20px', right: '10px', width: '80px', zIndex: 1, rotate: '15deg' } },
      { src: '/image/mariposa2.png', css: { bottom: '40px', left: '-25px', width: '50px', zIndex: 1, rotate: '-25deg' } }
    ]
  },
  { 
    id: 6, 
    img: '/image/foto6.jpg', 
    text: "Admiro tu luz, tu fe y esa forma única que tienes de ver el mundo.",
    decorations: [
      { src: '/image/ramo3.png', css: { top: '50%', right: '-40px', width: '100px', zIndex: -1, rotate: '90deg' } },
      { src: '/image/papel3.png', css: { top: '-30px', left: '-20px', width: '120px', zIndex: -1, rotate: '-5deg' } }
    ]
  },
  { 
    id: 7, 
    img: '/image/foto7.jpg', 
    text: "Contigo, cualquier lugar se siente como estar en casa.",
    decorations: [
      { src: '/image/ramo-papel1.png', css: { bottom: '-30px', left: '-30px', width: '150px', zIndex: 1, rotate: '10deg' } },
      { src: '/image/mariposa3.png', css: { top: '-20px', right: '-10px', width: '50px', zIndex: 1, rotate: '20deg' } }
    ]
  },
  { 
    id: 8, 
    img: '/image/foto8.jpg', 
    text: "Por eso, quería darte algo que dure tanto como lo que siento por ti...",
    decorations: [
      { src: '/image/ramo4.png', css: { bottom: '-20px', right: '-20px', width: '100px', zIndex: -1, rotate: '-10deg' } },
      { src: '/image/ramo5.png', css: { bottom: '-20px', left: '-20px', width: '100px', zIndex: -1, rotate: '10deg' } }
    ]
  }
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
      scrollSnapAlign: 'center',
      overflow: 'hidden' 
    }}>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative', 
          width: '85%',
          maxWidth: '400px', 
          marginBottom: '40px'
        }}
      >
        {data.decorations.map((deco, index) => (
          <motion.img
            key={index}
            src={deco.src}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + (index * 0.2), type: 'spring' }} 
            style={{
              position: 'absolute',
              ...deco.css
            }}
          />
        ))}

        <div style={{
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
          border: '5px solid #fff', 
          backgroundColor: '#fff'
        }}>
          <img 
            src={data.img} 
            alt={`Recuerdo ${data.id}`} 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>

      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontFamily: '"Playfair Display", serif',
          color: '#fdfbf7',
          fontSize: '1.3rem',
          textAlign: 'center',
          maxWidth: '85%',
          lineHeight: '1.5',
          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '15px',
          borderRadius: '10px',
          backdropFilter: 'blur(2px)'
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