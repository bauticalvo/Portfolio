import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaJs, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostgresql  } from 'react-icons/si';

const technologies = [
  'JavaScript', 'Typescript','React','React Native',  'Tailwind CSS', 'Redux',
  'Zustand', 'Node.js', 'Express.js','MongoDB', 'PostgreSQL','Git',  'Responsive Design', 'RESTful APIs', 'SCRUM'
];

const icons = [
  { name: 'React', icon: FaReact, x: 70, y: 10, animation: { x: [0, 100], rotate: [0, 360] } },
  { name: 'JavaScript', icon: FaJs, x: 40, y: 80, animation: { y: [0, 100], x: [0, -100], scale: [1, 1.2, 1] } },
  { name: 'Node.js', icon: FaNodeJs, x: 50, y: 20, animation: { rotate: [0, 180, 0], } },
  { name: 'TailwindCSS', icon: SiTailwindcss, x: 20, y: 40, animation: { x: [-200, -250], y: [200, 250] } },
  { name: 'CSS3', icon: SiPostgresql,  x: 80, y: 40, animation: {  x: [0, 50] } },
  { name: 'Git', icon: FaGitAlt, x: 60, y: 70, animation: { y: [0, 100], scale: [0.5, 0.8, 0.5] } },
  { name: 'MongoDB', icon: SiMongodb, x: 20, y: 0, animation: { rotate: [0, -360],scale: [0.7, 0.9, 0.7]} },
  { name: 'Express', icon: SiExpress, x: 90, y: 60, animation: { x: [0, -100], scale: [1, 1.4, 1] } }
];

const InfoSection =({t,isSmallScreen}) => {
  const [ num, setNum ] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //console.log(latest);
    setNum(latest)
  })

  const opacityRange = useTransform(scrollYProgress,  !isSmallScreen ? [0.15, 0.19] : [0.14, 0.18], [0, 1]);
  const opacity = useSpring(opacityRange, { stiffness: 400, damping: 90 });

  const opacityRange2 = useTransform(scrollYProgress, !isSmallScreen ? [0.15, 0.19] : [0.20, 0.22], [0, 1]);
  const opacity2 = useSpring(opacityRange2, { stiffness: 400, damping: 90 });


  
  return (
    <div className="min-h-screen bg-sand relative text-sandContrast font-playfair gap-32 px-20 flex items-center justify-center
    xs-md:flex-col xs:px-0 
    ">
      <section className="flex flex-col  px-4 gap-4 w-1/2 z-10
      xs:px-6 xs-md:mt-32 xs-md:w-full 
      ">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-8 text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('infosection.title')}
          </motion.h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ opacity }}
            >
            {t('infosection.description1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ opacity }}

            >
              {t('infosection.description2')}
            </motion.p>
          </div>
        </motion.div>
        
      </section>
      <section className='w-1/3 flex z-10 justify-center 
      xs-md:w-[90%] xs:mb-14
      '>
        <motion.div 
          className="w-[100%]  "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div className={`bg-sandContrast text-sand p-6 rounded-lg shadow-lg space-y-6 `}
            style={{ opacity: opacity2, scale: opacity2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">{t('infosection.stack')}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              { num > 0.15 && technologies.slice(0, 12).map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="bg-sand text-sandContrast py-2 px-4 rounded-full text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center">{t('infosection.others')}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              { num > 0.15 && technologies.slice(12).map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="bg-sand text-sandContrast py-2 px-4 rounded-full text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        </section>
        {icons.map((iconObj, index) => (
          <motion.div
            key={index}
            className="absolute text-sandContrast z-0 opacity-5"
            style={{
              fontSize: `${50 + index * 10}px`,
              top: `${iconObj.y}%`,
              left: `${iconObj.x}%`,
            }}
            animate={iconObj.animation}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          >
            <iconObj.icon />
          </motion.div>
        ))}


    
  </div>
  );
};


export default InfoSection