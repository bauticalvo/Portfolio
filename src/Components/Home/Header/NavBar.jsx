import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import {  useState } from 'react';


const NavBar = ({ isOpen, setIsOpen,isSmallScreen, isMediumScreen, isLargeScreen, isExtralargeScreen }) => {

  const [ num, setNum ] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
    
  const backgroundColor = useTransform(scrollYProgress,[0.19, 0.21, 0.92, 0.95], ["#8b1e3f", "#1C2934", "#1C2934", "#1c0f38"]);
  const src = `/images/logoB${num < 0.20 ? 1 : num > 0.95 ? 3 : 2}.png`

  //NOMBRE
  const textOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const textX = useTransform(scrollYProgress, [0, 0.05], isExtralargeScreen || isLargeScreen ? [25, -100] :
  isMediumScreen ? [50, -100] : [0, -100])

  
  const scaleRangeText = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scaleText = useSpring(scaleRangeText, { stiffness: 400, damping: 90 });


  //LOGO </>
  const logoOpacity = useTransform(scrollYProgress, [0.04, 0.05], [0, 1])
  const logoX = useTransform(scrollYProgress, [0, 0.05], isMediumScreen ? [0, -175] :  isSmallScreen ? [0, -150] : [0, -170])

  const scaleRangeX = useTransform(scrollYProgress, [0.05, 0.075], [0.5, 1])
  const scaleX = useSpring(scaleRangeX, { stiffness: 400, damping: 90 });

  //LOGO B
  const logoB = useTransform(scrollYProgress, [0, 0.05], isMediumScreen ? [50, 75] : isLargeScreen ? [25, 65] : 
  isExtralargeScreen ? [25, 100] : [0, 20])

  const scaleRange = useTransform(scrollYProgress, [0, 0.025, 0.025, 0.05], [1,0.5,0.5, 1]);
  const scale = useSpring(scaleRange, { stiffness: 400, damping: 90 });


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //console.log(latest);
    setNum(latest)
    setIsScrolled(latest > 0.05)
  })


    return (
        <header className={` w-full h-1/12 top-0 py-6 px-10 overflow-hidden flex justify-between
        md:px-2 xs:px-8
        ${isOpen ? 'z-[60] ' : 'z-20'} `} >
          <section className={` relative  top-4 xs:top-2 xl:top-6  `}>
            <motion.div
              className="text-4xl font-bold flex items-center "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            > 
              <motion.img 
              style={{scale, x:logoB}}
              src={src} alt="Logo de Bautista Calvo" 
              className={`${isOpen ? 'hidden ' : ''}  h-16 mr-1 
              xs:h-12  lg:h-16
              `} />
            <motion.span
            className="text-2xl font-bold xs:text-base lg:text-xl"
            style={{ color: isScrolled ? '' : '#8b1e3f', opacity: textOpacity, x: textX, scale: scaleText }}
          >
            autista Calvo 
          </motion.span>
          <motion.span
            style={{ color: backgroundColor, opacity: logoOpacity, x: logoX, scale: scaleX }}
            className={`text-2xl font-black xs:text-base lg:text-xl `}
          >
          {'</>'}
          </motion.span>
            </motion.div>
          </section>
          <motion.div
           className="absolute top-14 right-12 h-5 p-2 m-2 z-[60]
           xs:top-10 xs:right-4
           "
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
                    style={!isOpen ? { backgroundColor:  backgroundColor } : {backgroundColor: '#F0EFD6'}}
                    className={` ${isOpen ? 'w-8 ' : 'w-12 '} h-1`}
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                    {/* Segunda línea */}
                    <motion.div
                    style={!isOpen ? { backgroundColor:  backgroundColor } : {backgroundColor: '#F0EFD6'}}
                    className={`w-8 h-1`}
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </motion.div>
      </header>
    )
}

export default NavBar