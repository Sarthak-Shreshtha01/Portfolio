import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import {projects} from "../constants"
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({index , name , description , tags , image , source_code_link , live_link}) => {
  return (
    <motion.div 
    variants={fadeIn("up" , "spring" , 0.5 * index , 0.75)}
     >
      <Tilt
      options={{
        max: 45,        // Maximum tilt rotation angle in degrees
        scale: 1,       // Scale factor for tilt effect (1 = no scaling)
        speed: 450      // Speed of the tilt animation in milliseconds
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ' >
        <div className='relative w-full h-[230px] ' >
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl '  />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover  ' >

            <div
            onClick={() => window.open(source_code_link , "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
            >
              <img src={github} alt={name} className='w-1/2 h-1/2 object-contain ' />
            </div>

          </div>

        </div>

        <div className='mt-5' >
          <h3 className='text-white font-bold text-[24px]' >{name}</h3>
          <p className='mt-2 text-secondary text-[14px]' >{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2' >
          {tags.map((tag) => (
            <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
      
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >My Projects</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent`} >Projects</h2>
      </motion.div>

      <div className='w-full flex ' >
        <motion.p
        variants={fadeIn("" , "" , 0.1 , 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my journey as a developer, reflecting my dedication to creating impactful solutions. Each project is a real-world example of my skills in building dynamic web applications and immersive 3D experiences using MongoDB, Express.js, React, Node.js, and Three.js. With links to code repositories and live demos, these projects highlight my ability to solve complex problems, quickly learn new technologies, and deliver polished results
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 ' >
        {
          projects.map((project , index) => (
            <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            />
          ))
        }

      </div>

    </>
  )
}

export default SectionWrapper(Works , "")