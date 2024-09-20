import { motion } from 'framer-motion';
import { useState } from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className="relative w-full  top-0 z-30">
            <motion.div className="absolute top-2 right-2 h-5 p-2 m-2">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative text-2xl font-black text-secondary flex flex-col justify-center items-end space-y-1"
                    style={{ zIndex: 51 }} 
                >
                    {/* Primera línea */}
                    <motion.div
                    className={` ${isOpen ? 'w-8' : 'w-12'} h-1 bg-secondary`}
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                    {/* Segunda línea */}
                    <motion.div
                    className="w-8 h-1 bg-secondary"
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </motion.div>

          <motion.div 
            className={`relative top-0 w-full h-[50%] bg-white p-4 shadow-lg ${
              isOpen ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 50 }} 
          >
            <motion.div className='my-10 p-2 z-30'>
                <p className="text-xl font-black text-secondary">Menú desplegable</p>
                <p className="text-xl font-black text-secondary">Menú desplegable</p>
                <p className="text-xl font-black text-secondary">Menú desplegable</p>
                <p className="text-xl font-black text-secondary">Menú desplegable</p>

            </motion.div>
          </motion.div>
        </motion.div>
    );
}

export default Menu;
