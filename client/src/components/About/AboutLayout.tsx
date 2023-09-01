import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Navigation from "../Common/Navigation/Navigation";
import Paragraph from "../Common/Paragraph/Paragraph";
import { paragraphVariants } from "../../variants/animationVariants";

const AboutLayout = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-600 to-zinc-800 min-h-screen">
      <Navigation />
      <div className="container flex flex-col justify-center items-center mx-auto py-16 lg:py-32">
        <motion.div className="space-y-6 pt-14 pb-20 w-full lg:w-5/12"
          variants={paragraphVariants}
          initial='initial'
          animate='animate'
        >
          <h1 className="font-semibold text-white text-3xl text-center  ">
            About Us
          </h1>
          <Divider className="bg-white" />
          <Paragraph text={
            "Toronto is a city that celebrates creativity and diversity, and nowhere is this more evident than in the street art that adorns its walls and alleys. From colorful graffiti to thought-provoking murals, the city is full of artistic gems that reflect the unique perspectives and stories of its residents."
          } />
          <Paragraph text={
            "Our web application features a comprehensive collection of street art murals from all across Toronto. You can browse through the murals by neighborhood or artist, or simply explore at random to discover new and exciting works of art."
          } />
          <Paragraph text={
            "It's essential to recognize that all the credit and information provided within our web application belong to the City of Toronto and their Street Art Toronto Project. We do not own any of this data, and all rights and acknowledgments should be directed to the City of Toronto for their dedicated efforts in documenting and promoting the city's street art culture."
          } />
          <Paragraph text={
            "Whether you're a local Torontonian or a visitor to the city, our street art mural display web application is the perfect way to experience the beauty and creativity of Toronto's street art culture. So why wait? Start exploring today and see what amazing street art you can discover!"
          } />
        </motion.div>
      </div>
    </div>
  )
}

export default AboutLayout;
