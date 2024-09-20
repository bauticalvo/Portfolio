import { motion } from 'framer-motion';
import Menu from './Menu';


const NavBar = () => {


    return (
        <header className="fixed w-full h-[50%] top-0 z-50 p-6 overflow-hidden flex justify-between" >
          <motion.div className=" relative  top-0 w-1/2 ">
            <motion.h1 
              className="text-4xl font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/logoB3.png" alt="Logo de Bautista Calvo" className='h-20' />
            </motion.h1>
          </motion.div>
          <motion.div className='relative w-[20%] top-0 h-[100%]  z-30 '>
            <Menu />
          </motion.div>
      </header>
    )
}

export default NavBar