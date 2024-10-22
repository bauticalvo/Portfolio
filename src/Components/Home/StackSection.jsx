import {  useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { MdArrowRightAlt } from "react-icons/md";

const StackSection = ({scrollPosition}) => {
  const containerRef = useRef(null);
  const [num,setNum] = useState(0)
  
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
   // console.log(latest);
   setNum(latest)
  })

 //RANGE FUNCTIONS

  const scaleRange = useTransform(scrollYProgress, [0.5, 0.7], [1.5, 0.5]);
  const scale = useSpring(scaleRange, { stiffness: 400, damping: 90 });
  const scaleRangeReverse = useTransform(scrollYProgress, [0.5, 0.7], [1, 1.5]);
  const scale2 = useSpring(scaleRangeReverse, { stiffness: 400, damping: 90 });
  
  //OPACITY FUNCTIONS

  const opacityRange = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const opacity = useSpring(opacityRange, { stiffness: 400, damping: 90 });

  const opacityRange2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 0.9], [0, 1, 1,0]);
  const opacity2 = useSpring(opacityRange2, { stiffness: 400, damping: 90 });

  const opacityRange3 = useTransform(scrollYProgress, [0.7, 0.73], [0, 1,]);
  const opacity3 = useSpring(opacityRange3, { stiffness: 400, damping: 90 });

  //ROTATE FUNCTIONS 

  //TOP FUNCTIONS 

  const topRange = useTransform(scrollYProgress, [0.4, 0.7], ["100px", "1300px"]);
  const topSpring = useSpring(topRange, { stiffness: 80, damping: 30, mass: 0.5,});

  //POSITION FUNCTIONS

  const xCube1 = useTransform(scrollYProgress, [0.5, 0.7], [0, -700]);
  const xSpring1 = useSpring(xCube1, { stiffness: 100, damping: 20 });
  const yCube1 = useTransform(scrollYProgress, [0.5, 0.7], [0, -40]);
  const ySpring1 = useSpring(yCube1, { stiffness: 100, damping: 20 });

  const xCube2 = useTransform(scrollYProgress, [0.5, 0.7], [0, 350]);
  const xSpring2 = useSpring(xCube2, { stiffness: 100, damping: 20 });
  const yCube2 = useTransform(scrollYProgress, [0.5, 0.7], [0, 350]);
  const ySpring2 = useSpring(yCube2, { stiffness: 100, damping: 20 });

  const xCube3 = useTransform(scrollYProgress, [0.5, 0.7], [0, -350]);
  const xSpring3 = useSpring(xCube3, { stiffness: 100, damping: 20 });
  const yCube3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 450]);
  const ySpring3 = useSpring(yCube3, { stiffness: 100, damping: 20 });

  const xCube4 = useTransform(scrollYProgress, [0.5, 0.7], [0, 650]);
  const xSpring4 = useSpring(xCube4, { stiffness: 100, damping: 20 });
  const yCube4 = useTransform(scrollYProgress, [0.5, 0.7], [0, -80]);
  const ySpring4 = useSpring(yCube4, { stiffness: 100, damping: 20 });



 

    return (
      <motion.div className={`relative min-h-[220vh] bg-tiffany flex items-center  flex-col`}
      ref={containerRef}
      >
        <motion.div className={"absolute "}
        style={{ top: topSpring , opacity: opacity2}}
        >
          <div className="flex relative items-center justify-center ">
          <motion.div
          className="h-[30vh] w-[60vh] absolute  top-0 z-20 rounded-md "
          style={{
            scale,
            x: xSpring1,
            y: ySpring1,
          }}
          > 
          <motion.img
            src='/stack/plagitune/plagitune-photo.png'
            className="h-full w-full z-20 rounded-md"
          />
          <motion.h2
          style={{opacity:opacity3}}
            className="absolute z-30 -bottom-7 -left-5 text-3xl font-bold text-tiffany bg-turContrast px-6 py-4 rounded-2xl"
          >
            Plagitune 
          </motion.h2>
          </motion.div>

          <motion.div
          className="h-[30vh] w-[60vh] absolute top-1 z-10 rounded-md object-cover"
          style={{
            scale,
            x: xSpring2,
            y: ySpring2,
          }}
          > 
          <motion.img
            src='/stack/telemedicina/telemedicina-photo.png'
            className="h-full w-full z-20 rounded-md"
          />
          <motion.h2
          style={{opacity:opacity3}}
            className="absolute z-30 -bottom-7 -right-5 text-3xl font-bold text-tiffany bg-turContrast px-6 py-4 rounded-2xl"
          >
            Telemedicina
          </motion.h2>
          </motion.div>
          <motion.div
          className="h-[30vh] w-[60vh] absolute top-0 z-20 rounded-md object-cover"
          style={{
            scale,
            x: xSpring3,
            y: ySpring3,

          } }
          >    
          <motion.img
          src='/stack/idiomasmaster/idiomasmaster-photo.png'
          className="h-full w-full z-20 rounded-md"
          />
          <motion.h2
          style={{opacity:opacity3}}
            className="absolute z-30 -top-7 -right-5 text-3xl font-bold text-tiffany bg-turContrast px-6 py-4 rounded-2xl"
          >
            Idiomas Master 
          </motion.h2>
        </motion.div>
          <motion.div
          className="h-[60vh] w-[35vh] absolute top-1 z-10 rounded-md object-cover"
          style={{
            scale,
            x: xSpring4,
            y: ySpring4,
          }}
          > 
          <motion.img
            src='/stack/blipconnection/blipconnection-photo.jpg'
            className="h-full w-full z-20 rounded-md"
          />
          <motion.h2
          style={{opacity:opacity3}}
            className="absolute z-30 -top-7 -left-10 text-3xl font-bold text-tiffany bg-turContrast px-6 py-4 rounded-2xl"
          >
            Blipconnection 
          </motion.h2>
          </motion.div>
          <motion.div
          className="h-[30vh] w-[60vh] absolute top-1 z-0  rounded-md object-cover"
          style={{
            scale: scale2,
            opacity
          }}
          >
          <h2 className="text-5xl text-turContrast  font-playfair lg:text-6xl mb-6 font-black leading-tight">Descubre mis proyectos más recientes</h2>
          <motion.button
            whileHover={{ color: "#72C4B9" }} // Solo cambio de color del texto
            whileTap={{ scale: 0.9 }}
            className="relative bg-transparent border border-turContrast text-turContrast font-bold py-3 px-16 flex justify-center items-center gap-4 overflow-hidden group"
          >
            <span className="z-10">Proyectos</span> <MdArrowRightAlt size={20} className="z-10" />
            <span className="absolute inset-0 bg-turContrast transition-all duration-500 transform translate-x-full group-hover:translate-x-0"></span>
          </motion.button>

        </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
}

export default StackSection