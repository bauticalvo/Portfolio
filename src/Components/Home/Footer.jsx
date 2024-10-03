import { IoIosArrowDropupCircle } from "react-icons/io";
import { motion} from 'framer-motion';

const Footer = ({ scrollToSection, scrollToTop}) => {


    const handleArrow = () =>{
        scrollToSection("landing")
    }

    return (
        <div className="bg-transparent relative flex justify-center items-center flex-col text-payne overflow-hidden">
            <section className=" relative bg-beige py-2 rounded-t-full w-[5%] h-1/4 flex justify-center items-center">
                <motion.button
                    className='relative text-4xl  text-persian'
                    onClick={() => handleArrow()}
                >
                   <IoIosArrowDropupCircle />
                </motion.button>
            </section>
            <section className='bg-beige w-full py-8'>
                <div className="container mx-auto px-4 text-center">
                <p>&copy; Juan Bautista Calvo 2024 </p>
                </div>
            </section>
        </div>
    )
}

export default Footer