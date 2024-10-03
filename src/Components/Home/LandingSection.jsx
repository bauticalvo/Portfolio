import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LandingSection = ({scrollToSection}) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);


  return (
    <div className="bg-beige text-payne font-sans min-h-screen overflow-x-hidden ">
  
      <motion.div 
        className="relative  mt-16 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <main className="container mx-auto px-4 pt-24 lg:pt-32 flex flex-col lg:flex-row items-center space-x-20">
          <motion.section 
            className="w-1/2 lg:w-1/2 mb-12 lg:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 font-bold leading-tight">Desarrollador FrontEnd</h2>
            <p className="text-xl mb-8 text-royalBlue/80">Creando experiencias digitales únicas y memorables</p>
            <button
              className="bg-persian text-beige font-bold py-3 px-6 rounded-3xl"
              onClick={() => scrollToSection("contactSection")}
            >
              AAA
            </button>

          </motion.section>
          
          <motion.section 
            className="w-1/2 lg:w-1/2 flex items-center justify-center relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className='w-[80%] lg:w-[70%]  relative'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/jbc-photo.jpeg" 
                alt="Juan Developer" 
                className='h-[80%] w-[80%] object-cover  z-10 relative rounded-lg shadow-2xl'
              /> 
              <motion.div 
                className='absolute -bottom-10 right-14 border-2 border-persian h-full w-[80%]  rounded-lg'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.div>
            </motion.div>
          </motion.section>
        </main>
      </motion.div>
      <motion.section>
          <motion.div 
          className='absolute bottom-20 left-1/2 transform  -translate-x-1/2   w-12 h-12 hidden md:block '
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
        </motion.section>
    </div>
  );
};

export default LandingSection;