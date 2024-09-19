import { motion } from 'framer-motion';
import { useState } from 'react';


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-6 overflow-hidden flex items-center justify-between" >
          <motion.div className=" ">
            <motion.h1 
              className="text-4xl font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/logoB3.png" alt="Logo de Bautista Calvo" className='h-20' />
            </motion.h1>
          </motion.div>
          <motion.div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative text-2xl font-black text-secondary flex flex-col justify-center items-end space-y-1"
          >
            {/* Primera línea */}
            <motion.div
              className={` ${isOpen ?' w-8' : 'w-12' } h-1 bg-secondary`}
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
            
            {
              1 === isOpen && (
                <motion.div className='text-2xl font-black text-secondary bg-white h'>
                  <p>menu</p>
                </motion.div>
              )
            }
          </motion.div>
      </header>
    )
}

export default NavBar