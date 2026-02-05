/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const storyData = [
  { 
    id: 1,
    img: '/image/foto1.jpg', 
    text: "Todo comenzó con una coincidencia, un momento simple que cambió mi suerte." 
  },
  { 
    id: 2,
    img: '/image/foto2.jpg', 
    text: "Poco a poco, los días normales se transformaron en recuerdos favoritos." 
  },
  { 
    id: 3,
    img: '/image/foto3.jpg', 
    text: "Hemos compartido risas que me reinician la vida." 
  },
  { 
    id: 4,
    img: '/image/foto4.jpg', 
    text: "Y también hemos superado tormentas que nos hicieron más fuertes." 
  },
  { 
    id: 5,
    img: '/image/foto5.jpg', 
    text: "Me enseñaste que el amor no es solo un sentimiento, es una decisión de cada día." 
  },
  { 
    id: 6,
    img: '/image/foto6.jpg', 
    text: "Admiro tu luz, tu fe y esa forma única que tienes de ver el mundo." 
  },
  { 
    id: 7,
    img: '/image/foto7.jpg', 
    text: "Contigo, cualquier lugar se siente como estar en casa." 
  },
  { 
    id: 8,
    img: '/image/foto8.jpg', 
    text: "Por eso, quería darte algo que dure tanto como lo que siento por ti..." 
  }
];


const StorySlide = ({ data, index, scrollYProgress, totalSlides }) => {

  const step = 1 / totalSlides; 
  const start = step * index;
  const end = start + step;

  
  const opacity = useTransform(
    scrollYProgress,
    [start, start + (step * 0.2), end - (step * 0.2), end],
    [0, 1, 1, 0]
  );
  
  
  const scale = useTransform(scrollYProgress, [start, end], [0.85, 1]);
  const y = useTransform(scrollYProgress, [start, end], [50, -50]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        opacity: opacity,
        zIndex: 10,
        pointerEvents: 'none'
      }}
    >
      {/* LA FOTO */}
      <motion.div 
        style={{ 
          scale: scale,
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          marginBottom: '30px',
          maxWidth: '85vw',
          maxHeight: '50vh'
        }}
      >
        <img 
          src={data.img} 
          alt={`Recuerdo ${data.id}`} 
          style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} 
        />
      </motion.div>

      {/* EL TEXTO */}
      <motion.div style={{ y: y, padding: '0 20px', textAlign: 'center' }}>
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          color: '#fdfbf7',
          fontSize: '1.5rem',
          lineHeight: '1.4',
          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '15px',
          borderRadius: '10px',
          backdropFilter: 'blur(3px)'
        }}>
          {data.text}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (

    <div ref={containerRef} style={{ height: '800vh', position: 'relative' }}>
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {storyData.map((item, index) => (
          <StorySlide 
            key={item.id} 
            data={item} 
            index={index} 
            scrollYProgress={scrollYProgress} 
            totalSlides={storyData.length}
          />
        ))}
      </div>
    </div>
  );
};