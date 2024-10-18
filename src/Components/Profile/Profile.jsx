
import { motion } from 'framer-motion';


const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            
               <motion.section 
            className="w-1/2 lg:w-1/2 flex items-center justify-center relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className='w-[80%] lg:w-[70%]  relative '
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/jbc-photo.jpeg" 
                alt="Juan Developer"
                whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba( 116, 125, 132, 0.9)' }} 
                transition={{ duration: 0.3 }}
                className='h-[80%] w-[80%] object-cover  z-[5] relative rounded-lg shadow-persianShadow  '
              /> 
              <motion.div 
                className='absolute -bottom-10 right-14 border-[3px] border-persian h-full w-[80%] shadow-persianShadow  rounded-lg'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02,boxShadow: '0 0 10px rgba( 134, 43, 53, 0.9)' }}
              ></motion.div>
            </motion.div>
          </motion.section>
        </div>
    )
}

export default Profile