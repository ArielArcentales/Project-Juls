/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stickers = [
  // --- CAPA 1: EL FONDO (Papeles y Texturas) ---

  { id: 1, src: '/image/papel1.png', top: '5%', left: '5%', start: 0, end: 0.1, rotate: -5, scale: 1.2 },
  { id: 2, src: '/image/luna.png', top: '2%', left: '60%', start: 0, end: 0.15, rotate: 10, scale: 0.8 },
  { id: 3, src: '/image/ramo-papel1.png', top: '15%', left: '40%', start: 0.05, end: 0.2, rotate: 5, scale: 1.3 },
  { id: 4, src: '/image/papel2.png', top: '30%', left: '10%', start: 0.1, end: 0.25, rotate: -3, scale: 1.4 },
  { id: 5, src: '/image/ramo-papel2.png', top: '45%', left: '50%', start: 0.2, end: 0.35, rotate: 8, scale: 1.2 },
  { id: 6, src: '/image/papel3.png', top: '60%', left: '5%', start: 0.3, end: 0.45, rotate: -5, scale: 1.3 },

  // --- CAPA 2: FLORES Y RAMOS (El cuerpo principal) ---
 
  { id: 7, src: '/image/flor1.png', top: '10%', left: '15%', start: 0.05, end: 0.15, rotate: -15, scale: 0.9 },
  { id: 8, src: '/image/ramo1.png', top: '18%', left: '65%', start: 0.1, end: 0.2, rotate: 10, scale: 1.1 },
  { id: 9, src: '/image/flor2.png', top: '25%', left: '25%', start: 0.15, end: 0.25, rotate: -10, scale: 1 },
  { id: 10, src: '/image/ramo2.png', top: '32%', left: '55%', start: 0.2, end: 0.3, rotate: 5, scale: 1.2 },
  { id: 11, src: '/image/flor3.png', top: '40%', left: '15%', start: 0.25, end: 0.35, rotate: 15, scale: 1.1 },
  { id: 12, src: '/image/ramo3.png', top: '48%', left: '65%', start: 0.3, end: 0.4, rotate: -5, scale: 1.2 },
  { id: 13, src: '/image/flor4.png', top: '55%', left: '30%', start: 0.35, end: 0.45, rotate: 20, scale: 1 },
  { id: 14, src: '/image/ramo4.png', top: '62%', left: '60%', start: 0.4, end: 0.5, rotate: -8, scale: 1.3 },
  
  // --- CAPA 3: DETALLES PEQUEÑOS (Corazones y Mariposas) ---
 
  { id: 15, src: '/image/mariposa1.png', top: '12%', left: '80%', start: 0.1, end: 0.2, rotate: 25, scale: 0.7 },
  { id: 16, src: '/image/corazon1.png', top: '22%', left: '5%', start: 0.15, end: 0.25, rotate: -15, scale: 0.8 },
  { id: 17, src: '/image/mariposa2.png', top: '35%', left: '85%', start: 0.25, end: 0.35, rotate: -20, scale: 0.8 },
  { id: 18, src: '/image/corazon2.png', top: '50%', left: '5%', start: 0.35, end: 0.45, rotate: 10, scale: 0.9 },
  { id: 19, src: '/image/mariposa3.png', top: '65%', left: '10%', start: 0.45, end: 0.55, rotate: 30, scale: 0.8 },

  // --- CAPA 4: EL FINAL DENSO (Para tapar el negro antes del botón) ---

  { id: 20, src: '/image/flor1.png', top: '70%', left: '40%', start: 0.5, end: 0.65, rotate: -10, scale: 1.1 },
  { id: 21, src: '/image/ramo1.png', top: '72%', left: '80%', start: 0.55, end: 0.7, rotate: 15, scale: 0.9 },
  { id: 22, src: '/image/mariposa1.png', top: '75%', left: '20%', start: 0.6, end: 0.75, rotate: -25, scale: 0.8 },
  { id: 23, src: '/image/flor2.png', top: '78%', left: '60%', start: 0.65, end: 0.8, rotate: 10, scale: 1.2 },
  { id: 24, src: '/image/ramo5.png', top: '80%', left: '10%', start: 0.7, end: 0.9, rotate: -5, scale: 1.5 },
  { id: 25, src: '/image/corazon1.png', top: '82%', left: '50%', start: 0.75, end: 0.9, rotate: 20, scale: 0.8 },
  { id: 26, src: '/image/mariposa2.png', top: '85%', left: '80%', start: 0.8, end: 0.95, rotate: -15, scale: 0.9 }
];

const Sticker = ({ data, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [data.start, data.end], [0, 1]);
  const scale = useTransform(scrollYProgress, [data.start, data.end], [0.5, 1]);

  return (
    <motion.img
      src={data.src}
      alt={`sticker-${data.id}`}
      style={{
        position: 'absolute',
        top: data.top,
        left: data.left,
        opacity: opacity,
        scale: scale,
        rotate: `${data.rotate}deg`,
        filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.5))',
        maxWidth: '45vw', 
        maxHeight: '35vh', 
        zIndex: 10
      }}
    />
  );
};

export const Garden = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        width: '100%',
        overflow: 'hidden'
      }}>
        {stickers.map(sticker => (
          <Sticker key={sticker.id} data={sticker} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
};