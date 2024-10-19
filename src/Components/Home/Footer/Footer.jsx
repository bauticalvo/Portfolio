import { IoIosArrowDropupCircle } from "react-icons/io";
import { motion} from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope  } from 'react-icons/fa';

const Footer = ({ scrollToSection}) => {


    const handleScroll = (section) =>{
        scrollToSection(section)
    }


    return (
        <div className="bg-transparent relative flex justify-center items-center flex-col text-persian overflow-hidden 
        xs:text-sm
        md:text-base
        lg:text-lg
        ">
            <section className=" relative bg-beige py-2 rounded-t-full  flex justify-center items-center
            xs:w-[20%] xs:h-1/4
            md:w-[20%] md:h-1/4
            lg-xl:w-[10%] lg:h-1/4
            ">
                <motion.button
                    className='relative text-4xl  '
                    onClick={() => handleScroll("landing")}
                >
                   <IoIosArrowDropupCircle />
                </motion.button>
            </section>
            <main className='bg-beige w-full py-8 flex items-center justify-center
            xs-md:flex-col xs-md:space-y-8 
            lg-xs:flex-row lg-xs:items-center lg-xs:space-y-0 lg-xs:space-x-4
            '>
                <section className="container text-center font-black font-playfair flex items-center w-1/2 
                xs-md:justify-center lg-xl:justify-center ">
                    <p>&copy; Juan Bautista Calvo 2024 </p>
                </section>
                <motion.section className='flex space-x-6  text-center items-center justify-center w-1/2 '>
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
                        onClick={ ()=> handleScroll("contactSection")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaEnvelope  className="text-3xl" />
                    </motion.a>
                </motion.section>
            </main>

        </div>
    )
}

export default Footer