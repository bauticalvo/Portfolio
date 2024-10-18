import {  useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';


const StackSection = ({scrollPosition}) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
   // console.log(latest);
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

  //ROTATE FUNCTIONS 

  const rotate = useTransform(scrollYProgress, [0.6, 0.7], [0, 90]);

  //TOP FUNCTIONS 

  const topRange = useTransform(scrollYProgress, [0.4, 0.7], ["100px", "1300px"]);
  const topSpring = useSpring(topRange, { stiffness: 80, damping: 30, mass: 0.5,});

  //POSITION FUNCTIONS

  const xCube1 = useTransform(scrollYProgress, [0.5, 0.7], [0, -700]);
  const xSpring1 = useSpring(xCube1, { stiffness: 100, damping: 20 });
  const yCube1 = useTransform(scrollYProgress, [0.5, 0.7], [0, -100]);
  const ySpring1 = useSpring(yCube1, { stiffness: 100, damping: 20 });

  const xCube2 = useTransform(scrollYProgress, [0.5, 0.7], [0, 400]);
  const xSpring2 = useSpring(xCube2, { stiffness: 100, damping: 20 });
  const yCube2 = useTransform(scrollYProgress, [0.5, 0.7], [0, 300]);
  const ySpring2 = useSpring(yCube2, { stiffness: 100, damping: 20 });

  const xCube3 = useTransform(scrollYProgress, [0.5, 0.7], [0, -350]);
  const xSpring3 = useSpring(xCube3, { stiffness: 100, damping: 20 });
  const yCube3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 450]);
  const ySpring3 = useSpring(yCube3, { stiffness: 100, damping: 20 });

  const xCube4 = useTransform(scrollYProgress, [0.5, 0.7], [0, 650]);
  const xSpring4 = useSpring(xCube4, { stiffness: 100, damping: 20 });
  const yCube4 = useTransform(scrollYProgress, [0.5, 0.7], [0, -150]);
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
          className="h-[30vh] w-[30vh] absolute  top-0 z-20 rounded-md "
          style={{
            scale,
            x: xSpring1,
            y: ySpring1,
            rotate,
          }}
          > 
          <motion.img
            src='/images/React_logo.png'
            className="h-full w-full z-20 rounded-md"
          />
          </motion.div>
          <motion.div
          className="h-[30vh] w-[30vh] absolute top-1 z-10 bg-persian border border-persian rounded-md object-cover"
          style={{
            scale,
            x: xSpring2,
            y: ySpring2,
          }}
          > {scrollPosition} </motion.div>
          <motion.div
          className="h-[30vh] w-[30vh] absolute bg-blue-500 border border-blue-500 top-0 z-20 rounded-md object-cover"
          style={{
            scale,
            x: xSpring3,
            y: ySpring3,

          } }
          > {scrollPosition} </motion.div>
          <motion.div
          className="h-[30vh] w-[30vh] absolute top-1 z-10 bg-green-500 border border-green-500  rounded-md object-cover"
          style={{
            scale,
            x: xSpring4,
            y: ySpring4,
          }}
          > {scrollPosition} </motion.div>
          <motion.div
          className="h-[30vh] w-[30vh] absolute top-1 z-0  rounded-md object-cover"
          style={{
            scale: scale2,
            opacity
          }}
          >
          <h2 className="text-5xl text-turContrast  font-playfair lg:text-6xl mb-6 font-black leading-tight">Desarrollador FrontEnd</h2>
          <button
          className="bg-persian text-beige font-bold py-3 px-6 rounded-3xl"
          >
          Proyectos
        </button></motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
}

export default StackSection