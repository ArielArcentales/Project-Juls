/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = '2026-02-06T00:00:00';

export const Countdown = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(TARGET_DATE).getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        if (onComplete) onComplete();
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  const numStyle = { fontSize: '2rem', fontFamily: '"Playfair Display", serif', color: '#ffffff', minWidth: '40px', textAlign: 'center' };
  const lblStyle = { fontSize: '0.7rem', fontFamily: 'Lato, sans-serif', textTransform: 'uppercase', opacity: 0.7, color: '#ffffff' };
  const boxStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 8px' };
  const separatorStyle = { fontSize: '2rem', color: '#ffffff', marginTop: '-5px' };

  return (
    <motion.div 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
      style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', background: 'rgba(255,255,255,0.02)' }}
    >
      <div style={boxStyle}><span style={numStyle}>{timeLeft.days}</span><span style={lblStyle}>Días</span></div>
      <span style={separatorStyle}>:</span>
      <div style={boxStyle}><span style={numStyle}>{timeLeft.hours}</span><span style={lblStyle}>Hs</span></div>
      <span style={separatorStyle}>:</span>
      <div style={boxStyle}><span style={numStyle}>{timeLeft.minutes}</span><span style={lblStyle}>Min</span></div>
      <span style={separatorStyle}>:</span>
      <div style={boxStyle}><span style={numStyle}>{timeLeft.seconds}</span><span style={lblStyle}>Seg</span></div>
    </motion.div>
  );
};