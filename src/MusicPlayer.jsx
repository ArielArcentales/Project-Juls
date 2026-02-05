/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio('/music/cancion.mp3'));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {

    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; 


    const attemptPlay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("El navegador bloqueó el autoplay. Esperando interacción.");
        setIsPlaying(false);
      }
    };

    attemptPlay();

    return () => {
      audioRef.current.pause();
    };
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={togglePlay}
      style={{
        position: 'fixed', // Flotante
        bottom: '20px',
        left: '20px',
        zIndex: 100, 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fdfbf7',
        fontSize: '1.2rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? '🎵' : '🔇'}
    </motion.button>
  );
};