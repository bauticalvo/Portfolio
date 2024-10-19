import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LandingSection = ({ isLargeScreen}) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const { t } = useTranslation();
  const [currentDescription, setCurrentDescription] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentDescription((prev) => (prev + 1) % 3);
  }, 5000); // Cambia cada 5 segundos

  return () => clearInterval(timer);
}, []);

  return (
    <div className="bg-beige text-persian w-full font-sans h-[95vh] overflow-hidden no-scrollbar ">
      <motion.div 
        className="relative mt-40 w-full  h-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <main className="container w-full text-center mx-auto px-4 mb-72  flex flex-col items-center  justify-center space-x-20">
          <motion.section 
            className="w-full  mb-12 lg:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-playfair  mb-6 font-black leading-tight 
            xl:text-7xl xs:text-4xl xs:text-[42px] md:text-6xl lg:text-6xl
            ">{t('landing.title')}</h2>
            <AnimatePresence mode="wait">
            <motion.p
              key={currentDescription}
               className="font-playfair font-semibold mb-8 text-royalBlue/80 md:text-xl xs:md xs:px-10 lg-xl:text-xl "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {t(`landing.description${[currentDescription]}`)}
            </motion.p>
          </AnimatePresence>
          </motion.section>  
        </main>
      </motion.div>
      <motion.section>
        {
          isLargeScreen && (
          <motion.div 
          className='absolute bottom-32 left-1/2 transform  -translate-x-1/2   w-12 h-12 hidden md:block '
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ opacity }}
          >
            <motion.div 
              className="w-8 h-12 border-2 mt-10 border-persian rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
                <motion.div 
                  className="w-1 h-2 bg-persian rounded-full mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
            </motion.div>
          </motion.div>
          )}
        </motion.section>

    </div>
  );
};

export default LandingSection;