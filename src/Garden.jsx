/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stickers = [
  // --- INICIO RÁPIDO (0% - 15%) ---
  { id: 1, src: '/image/papel1.png', top: '2%', left: '5%', start: 0, end: 0.1, rotate: -5, scale: 1.2 },
  { id: 2, src: '/image/luna.png', top: '5%', left: '65%', start: 0, end: 0.15, rotate: 10, scale: 0.8 }, 
  { id: 3, src: '/image/flor1.png', top: '10%', left: '15%', start: 0.05, end: 0.15, rotate: -15, scale: 0.9 },
  
  // --- ZONA MEDIA (15% - 50%) ---
  { id: 4, src: '/image/ramo-papel1.png', top: '15%', left: '50%', start: 0.1, end: 0.25, rotate: 5, scale: 1.1 },
  { id: 5, src: '/image/corazon1.png', top: '22%', left: '10%', start: 0.15, end: 0.3, rotate: -10, scale: 0.8 },
  { id: 6, src: '/image/mariposa1.png', top: '25%', left: '75%', start: 0.2, end: 0.35, rotate: 25, scale: 0.7 },
  { id: 7, src: '/image/papel2.png', top: '30%', left: '20%', start: 0.25, end: 0.4, rotate: 3, scale: 1.3 }, 
  { id: 8, src: '/image/ramo1.png', top: '32%', left: '35%', start: 0.3, end: 0.45, rotate: -5, scale: 1 }, 
  { id: 9, src: '/image/flor2.png', top: '38%', left: '60%', start: 0.35, end: 0.5, rotate: 15, scale: 1.1 },
  
  // --- ZONA FINAL DENSA (50% - 95%) ---
  // Aquí es donde eliminamos el hueco negro: estiramos la aparición hasta casi el 1.0
  { id: 10, src: '/image/corazon2.png', top: '45%', left: '15%', start: 0.45, end: 0.6, rotate: -12, scale: 0.9 },
  { id: 11, src: '/image/ramo2.png', top: '48%', left: '50%', start: 0.5, end: 0.65, rotate: 8, scale: 1.2 },
  { id: 12, src: '/image/mariposa2.png', top: '52%', left: '80%', start: 0.55, end: 0.7, rotate: -20, scale: 0.8 },
  { id: 13, src: '/image/papel3.png', top: '58%', left: '10%', start: 0.6, end: 0.75, rotate: -3, scale: 1.2 },
  { id: 14, src: '/image/ramo3.png', top: '60%', left: '25%', start: 0.65, end: 0.8, rotate: 10, scale: 1.1 },
  { id: 15, src: '/image/flor3.png', top: '65%', left: '65%', start: 0.7, end: 0.85, rotate: -15, scale: 1 },
  { id: 16, src: '/image/mariposa3.png', top: '70%', left: '15%', start: 0.75, end: 0.9, rotate: 30, scale: 0.9 },
  { id: 17, src: '/image/ramo4.png', top: '72%', left: '55%', start: 0.8, end: 0.95, rotate: 5, scale: 1.3 },
  { id: 18, src: '/image/flor4.png', top: '75%', left: '30%', start: 0.82, end: 0.96, rotate: -8, scale: 1.2 },
  
  // EL RAMO FINAL (Aparece justo antes del botón)
  { id: 19, src: '/image/ramo5.png', top: '78%', left: '10%', start: 0.85, end: 0.98, rotate: 0, scale: 1.6 }
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
    <div ref={containerRef} style={{ height: '250vh', position: 'relative' }}>
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