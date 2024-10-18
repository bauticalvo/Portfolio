import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSlider from './LanguageSlider';

const Menu = ({ isOpen, setIsOpen }) => {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

    return (
        <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full h-full top-0 cursor-default">

          <motion.div   
            className={`absolute top-10 right-10  w-[25%] h-[50%] bg-white p-4 shadow-lg 
              ${ isOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} 
          >
            <motion.div className='my-10 p-2  text-xl font-black text-turquoise'>
                <p>Menú desplegable</p>
                <p>Menú desplegable</p>
                <p>Menú desplegable</p>
                <p>Menú desplegable</p>
            
            <motion.button
                onClick={() => changeLanguage('en')}
            >
                <p>Cambiar idioma</p>
            </motion.button>
            <LanguageSlider />

            </motion.div>
          </motion.div>
        </motion.button>
    );
}

export default Menu;
