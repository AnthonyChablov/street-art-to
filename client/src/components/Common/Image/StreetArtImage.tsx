import { motion } from "framer-motion";
import graffittiImg from './../../../assets/images/graffitti-img-1.png';
import graffittiImg3 from './../../../assets/images/graffitti-img-3.png';

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

interface IStreetArtImage{
  mode: number
}

const StreetArtImage = ({mode}:IStreetArtImage) => {
  return (
    <div className=" max-h-screen flex justify-center lg:w-7/12">
      <motion.img className="hidden md:w-full lg:block lg:w-9/12 3xl:w-10/12 
          rounded-extraLarge, rounded-tr-extraLarge, rounded-tl-extraLarge, 
          rounded-br-extraLarge, rounded-bl-extraLarge rounded-tr-extraLarge" 
          src={ mode === 1 ? graffittiImg : graffittiImg3 } 
          alt="graffitti" 
          variants={imgVariants}
          initial='initial'
          animate='animate'
      />
    </div>
  )
}

export default StreetArtImage