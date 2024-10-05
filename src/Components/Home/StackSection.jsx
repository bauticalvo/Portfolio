import { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from 'framer-motion';


const StackSection = ({scrollPosition}) => {

  const [isStoped, setIsStoped] = useState(false);
  const [isStopedHeight, setIsStopedHeight] = useState(false);
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [1, 2]);

  useEffect(() => {
    if ( scrollPosition < 3700 && scrollPosition > 2000 ) {
      if(scrollPosition > 2000){
        setX(-scrollPosition * 0.075);
        sety(-scrollPosition * 0.075);
      }

      setIsStoped(true);
    } else {
      if(scrollPosition > 3700) setIsStopedHeight(true) 
      else setIsStopedHeight(false)
      setIsStoped(false);
    }
  }, [scrollPosition]);

 

    return (
      <div className={`relative min-h-[300vh] bg-tiffany flex items-center justify-center flex-col`}>
        <div className={`${isStoped ? "fixed" : "absolute "} ${!isStopedHeight ? "top-[40vh]" : "bottom-[40vh]"}   `}>
          <div className="flex relative items-center justify-center">
          <motion.div 
          className="h-[30vh] w-[30vh] absolute bg-white border border-turquoise top-0 z-20 rounded-md object-cover"
          style={{
            scale
          }}
          animate={{ x,y}}
          />
          <motion.div
          className="h-[30vh] w-[30vh] absolute top-1 z-10 bg-persian border border-persian rounded-md object-cover"
          style={{
            scale
          }}
          />
          </div>
        </div>
      </div>
    );
}

export default StackSection