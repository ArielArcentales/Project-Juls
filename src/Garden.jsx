/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stickers = [
  { 
    id: 1, src: '/image/ramo-papel1.png', 
    top: '5%', left: '10%', start: 0, end: 0.15, rotate: -5, scale: 1.1 
  },
  { 
    id: 2, src: '/image/ramo1.png', 
    top: '15%', left: '55%', start: 0.1, end: 0.25, rotate: 10, scale: 1.2 
  },
  { 
    id: 3, src: '/image/ramo2.png', 
    top: '30%', left: '10%', start: 0.25, end: 0.4, rotate: -15, scale: 1 
  },
  { 
    id: 4, src: '/image/ramo-papel2.png', 
    top: '45%', left: '40%', start: 0.4, end: 0.55, rotate: 5, scale: 1.3 
  },
  { 
    id: 5, src: '/image/ramo3.png', 
    top: '55%', left: '60%', start: 0.5, end: 0.65, rotate: 20, scale: 1.1 
  },
  { 
    id: 6, src: '/image/ramo4.png', 
    top: '70%', left: '15%', start: 0.65, end: 0.8, rotate: -10, scale: 1.2 
  },
  { 
    id: 7, src: '/image/ramo5.png', 
    top: '80%', left: '30%', start: 0.75, end: 0.9, rotate: 0, scale: 1.5 
  }
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
    <div ref={containerRef} style={{ height: '350vh', position: 'relative' }}>
      
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