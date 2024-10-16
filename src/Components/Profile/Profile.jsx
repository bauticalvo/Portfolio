
import { motion } from 'framer-motion';


const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <motion.img 
                src="/jbc-photo.jpeg" 
                alt="Juan Developer"
                whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba( 116, 125, 132, 0.9)' }} 
                transition={{ duration: 0.3 }}
                className='h-[30%] w-[30%] object-cover  z-[5] relative rounded-lg shadow-persianShadow  '
              /> 
        </div>
    )
}

export default Profile