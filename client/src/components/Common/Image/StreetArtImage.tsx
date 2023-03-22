import { motion } from "framer-motion";
import graffittiImg from './../../../../public/images/graffitti-img-1.png';

const imgVariants={
  initial:{
      opacity:0,
      x:-30,
    },
    animate:{
      opacity: 1,
      x:0,
      transition:{
        type:'tween',
        ease:'easeInOut',
        duration: 0.625,
        when: ''
      }
    },
}

const StreetArtImage = () => {
  return (
    <div className=" max-h-screen flex justify-center lg:w-7/12">
      <motion.img className="hidden md:w-full lg:block lg:w-9/12 3xl:w-10/12 
          rounded-extraLarge, rounded-tr-extraLarge, rounded-tl-extraLarge, 
          rounded-br-extraLarge, rounded-bl-extraLarge rounded-tr-extraLarge" 
          src={graffittiImg} 
          alt="graffitti" 
          variants={imgVariants}
          initial='initial'
          animate='animate'
      />
    </div>
  )
}

export default StreetArtImage