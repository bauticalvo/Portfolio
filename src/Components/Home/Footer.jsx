import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';



const Footer = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div>
            <footer className="bg-[#4A6FA5] text-white py-6 mt-16 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                <p>&copy; Juan Bautista Calvo 2024 </p>
                </div>
            </footer>

            <motion.div 
                className="fixed bottom-4 right-4 w-12 h-12 bg-[#F4976C] rounded-full flex items-center justify-center cursor-pointer"
                style={{ opacity: scrollY > 100 ? 1 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.div>
        </div>
    )
}

export default Footer