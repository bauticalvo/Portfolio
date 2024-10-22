import { motion } from 'framer-motion';
import LanguageSlider from './LanguageSlider';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope  } from 'react-icons/fa';


const Menu = ({ isOpen, setIsOpen, scrollToSection, t }) => {

  const navigate = useNavigate();


  const handleMail = ()=>{
    scrollToSection("contactSection")
    setIsOpen(false)
  }

    return (
          <motion.div   
            className={`fixed z-[50] w-full h-full bg-persian p-4 shadow-lg flex flex-col justify-center items-center text-beige  font-playfair space-y-8
              ${ isOpen ? 'flex' : 'hidden'}`}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5 }}
          >
            <motion.section className='my-10 p-2 text-xl font-bold flex flex-col items-center  space-y-8 '>
           <button
            onClick={()=> navigate('/profile')}
           >{t('menu.profile')}
           </button>
           <button
            onClick={()=> navigate('/proyects')}
           >{t('menu.proyects')}
           </button>
            <LanguageSlider  />

            </motion.section>
            <motion.section className='flex space-x-6'>
            <motion.a
                onClick={ ()=> window.open("https://github.com/bauticalvo")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-3xl" />
              </motion.a>
              <motion.a
                onClick={ ()=> window.open("https://www.linkedin.com/in/juan-bautista-calvo-668613238/")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-3xl" />
              </motion.a>
         
              <motion.a
                onClick={ ()=> window.open("https://www.instagram.com/bauti.calvoo/")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-3xl" />
              </motion.a>
              <motion.a
                onClick={ ()=> handleMail()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope  className="text-3xl" />
              </motion.a>
            </motion.section>
          </motion.div>
    );
}

export default Menu;
