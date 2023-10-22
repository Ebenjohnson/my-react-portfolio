
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from 'framer-motion'


const  Landing=({setSelectedPage}) =>{
    const isAboveLarge = useMediaQuery('(min-width: 1060)')
  return (

    <section id='home'
    className='md:flex md:justify-between md:mt-32 flex justify-center md:h-full py-10'
    >
        {/* IMAGE SECTION*/}
        <div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-items-center gap-16 md:h-full py-10'>
            { isAboveLarge ? (
                <div
                className='relative z-10 ml-20 before:absolute before:-left-20 before:rounded-t-[400px]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
                >
                 <img 
                 alt='profile'
                 className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
                 src='../assets/profile-image.png'></img>   
                </div>
            ):( <img
                alt="profile"
                className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                src="assets/profile-image.png"
              />
            )}
          </div>
         {/* Main Text*/}   
         <div className="z-30 basis-2/5 mt-12 md:mt-32">

             {/* Headings*/}
             <motion.div 
             initial = 'hidden'
             whileInView= 'visible'
             viewport={{ once: true, amount : 0.5}}
             transition={{duration : 0.5}}
             variants={{
                hidden: {opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
             }}
             >
                <p className="text-6xl font-playfair z-10 text-center md:text-start" >
                    Ebenezer {''}
                    <span className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                    before:absolute before:-left-[25px] before: -top[70px] before:z-[-1]'
                    >
                    Johnson
                    </span>
                </p>

                <p className="mt-10 mb-7 text-sm text-center md:text-start" >
                Microsoft CRM Specialist Professional Business Development Manager 
                |Technical Engineer |Application Developer |Web Developer| 
                Recruitment Officer 
                |Digital Marketer |Graphic Designer| Data Entry Operator|
                </p >
             </motion.div>

             {/* Headings*/}
             <motion.div
             className='flex mt-5 justify-center md:justify-start'
             initial='hidden'
             whileInView='visible'
             viewport={{once:true, amount : 0.5}}
             transition={{delay: 0.2, duration: 0.5}}
             variants={{
                hidden: {opacity:1, x:-50},
                visible:{opacity: 0, x:0}
             }}
             >
                <AnchorLink 
                className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500'
                onClick={()=>{
                    setSelectedPage('contact')
                }} 
                
                href='#contact'
                >
                    <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair"
                    Lets Talk
                    ></div>
                </AnchorLink>
             </motion.div>

            <motion.div
            className='flex mt-5 justify-center md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount : 0.5}}
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
               hidden: {opacity:1, x:-50},
               visible:{opacity: 0, x:0}
            }}
            >
                  {/* Social Media Icons Component to be created*/}
                <socialMediaIcons/>

            </motion.div>

             

         </div>
            

       

    </section>
  )
}



export default Landing
