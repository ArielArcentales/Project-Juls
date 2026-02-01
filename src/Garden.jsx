/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Garden = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleFlower1 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const scaleFlower2 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const scaleFlower3 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  
  const opacityText1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const opacityText2 = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const opacityText3 = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    <div ref={containerRef} style={{ height: '350vh', position: 'relative' }}>
      
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }}>
        
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 600" 
          preserveAspectRatio="xMidYMax slice"
        >
          <motion.path
            d="M 50 600 C 20 450, 80 350, 50 200 C 20 100, 80 50, 50 20"
            fill="transparent"
            stroke="#2d6a4f"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength: scrollYProgress }} 
          />

          <motion.g 
            style={{ scale: scaleFlower1, transformOrigin: "35px 400px" }}
          >
            <circle cx="35" cy="400" r="5" fill="#e63946" />
            <path d="M 35 400 Q 25 390 35 380 Q 45 390 35 400" fill="#e63946" />
            <path d="M 35 400 Q 45 410 35 420 Q 25 410 35 400" fill="#e63946" />
            <path d="M 35 400 Q 25 410 15 400 Q 25 390 35 400" fill="#e63946" />
            <path d="M 35 400 Q 45 390 55 400 Q 45 410 35 400" fill="#e63946" />
          </motion.g>

          <motion.g 
            style={{ scale: scaleFlower2, transformOrigin: "65px 250px" }}
          >
             <circle cx="65" cy="250" r="4" fill="#ffb703" />
             <ellipse cx="65" cy="240" rx="3" ry="8" fill="#fb8500" />
             <ellipse cx="65" cy="260" rx="3" ry="8" fill="#fb8500" />
             <ellipse cx="55" cy="250" rx="8" ry="3" fill="#fb8500" />
             <ellipse cx="75" cy="250" rx="8" ry="3" fill="#fb8500" />
          </motion.g>

          <motion.g 
            style={{ scale: scaleFlower3, transformOrigin: "50px 20px" }}
          >
            <path d="M 50 20 L 40 10 L 50 0 L 60 10 Z" fill="#9d4edd" />
            <path d="M 50 20 L 35 25 L 40 10 Z" fill="#7b2cbf" />
            <path d="M 50 20 L 65 25 L 60 10 Z" fill="#7b2cbf" />
          </motion.g>

        </svg>

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          
          <motion.div style={{ position: 'absolute', top: '60%', left: '10%', opacity: opacityText1 }}>
            <h3 style={{ margin: 0, color: '#e63946' }}>Pasión</h3>
            <p style={{ margin: 0, fontSize: '0.8rem' }}>Nuestro primer beso</p>
          </motion.div>

          <motion.div style={{ position: 'absolute', top: '40%', right: '10%', textAlign: 'right', opacity: opacityText2 }}>
            <h3 style={{ margin: 0, color: '#fb8500' }}>Alegría</h3>
            <p style={{ margin: 0, fontSize: '0.8rem' }}>Tus risas</p>
          </motion.div>

          <motion.div style={{ position: 'absolute', top: '15%', left: '0%', width: '100%', textAlign: 'center', opacity: opacityText3 }}>
            <h2 style={{ margin: 0, color: '#9d4edd', textShadow: '0 0 10px rgba(157,78,221,0.5)' }}>Eternidad</h2>
            <p style={{ margin: 0 }}>Porque el código no muere</p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};