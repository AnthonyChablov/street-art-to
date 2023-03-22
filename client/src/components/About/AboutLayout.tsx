import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Navigation from "../Common/Navigation/Navigation";
import Paragraph from "../Common/Paragraph/Paragraph";
import grafittiImg2 from '../../assets/images/graffitti-img-2.png'

const imgVariants={
  initial:{
      opacity:0,
      x:30,
    },
    animate:{
      opacity: 1,
      x:0,
      transition:{
        type:'tween',
        ease:'easeInOut',
        duration: 0.4,
        when: ''
      }
    },
}

const paragraphVariants = {
  initial:{
    opacity:0,
    y:-30,
  },
  animate:{
    opacity: 1,
    y:0,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.4,
      when: ''
    }
  },
}

const AboutLayout = () => {
  return (
    <div className="">
        <Navigation/>
        <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center mx-auto pt-44 pb-32 ">
          <motion.div className=" space-y-5 pb-20 w-12/12 lg:w-5/12"
            variants={paragraphVariants}
            initial='initial'
            animate='animate'
          >
            <h1 className="font-semibold text-zinc-800 text-2xl text-center lg:text-left">
              About Us
            </h1>
            <Divider/>
            <Paragraph text={
              "Toronto is a city that celebrates creativity and diversity, and nowhere is this more evident than in the street art that adorns its walls and alleys. From colorful graffiti to thought-provoking murals, the city is full of artistic gems that reflect the unique perspectives and stories of its residents." 
            }/>
            <Paragraph text={
              "Our web application features a comprehensive collection of street art murals from all across Toronto. You can browse through the murals by neighborhood or artist, or simply explore at random to discover new and exciting works of art." 
            }/>
            <Paragraph text={
              "We're constantly updating our database with new street art pieces as they're created, so be sure to check back often to stay up to date with the latest additions to the city's vibrant street art scene." 
            }/>
            <Paragraph text={
              "Whether you're a local Torontonian or a visitor to the city, our street art mural display web application is the perfect way to experience the beauty and creativity of Toronto's street art culture. So why wait? Start exploring today and see what amazing street art you can discover!" 
            }/>
          </motion.div>
          <div className="w-12/12 lg:w-6/12 pb-32 lg:pb-0 ">
            <motion.img className="rounded-extraLarge, rounded-tr-extraLarge, rounded-tl-extraLarge, 
              rounded-br-extraLarge, rounded-bl-extraLarge rounded-tr-extraLarge" 
              src={grafittiImg2} 
              alt="grafitti-ui" 
              variants={imgVariants}
              initial='initial'
              animate='animate'
            />
          </div>
        </div>
    </div>
  )
}

export default AboutLayout