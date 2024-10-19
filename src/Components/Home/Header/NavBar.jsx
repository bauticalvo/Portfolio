import { motion } from 'framer-motion';


const NavBar = ({ isOpen, setIsOpen }) => {



    return (
        <header className={` w-full h-1/12 top-0 p-6 overflow-hidden flex justify-between ${isOpen ? 'z-[60] ' : 'z-20'} `} >
          <section className=" relative  top-0 ">
            <motion.h1 
              className="text-4xl font-bold"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/logoB6.png" alt="Logo de Bautista Calvo" className={`${isOpen ? 'hidden ' : ''}h-32 ml-8
              xs:h-20 xs:ml-0
              `} />
            </motion.h1>
          </section>
          <motion.div
           className="absolute top-14 right-12 h-5 p-2 m-2 z-[60]"
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }
          }
           >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative text-2xl font-black ${ isOpen ? 'text-beige   ' : 'text-persian '} flex flex-col justify-center items-end space-y-1`}
                >
                    {/* Primera línea */}
                    <motion.div
                    className={` ${isOpen ? 'w-8 bg-beige ' : 'w-12 bg-persian'} h-1`}
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                    {/* Segunda línea */}
                    <motion.div
                    className={`${isOpen ? 'bg-beige ' : 'bg-persian'} w-8 h-1`}
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </motion.div>
      </header>
    )
}

export default NavBar