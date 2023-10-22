
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

  
const  Link = ({ page, selectedPage, setSelectedPage }) =>{
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className={`${selectedPage===lowerCasePage ? "text-yellow" : ""
     } hover:text-yellow transition duration-500  `} href= {`#${lowerCasePage}`} 
     onClick={()=> setSelectedPage(lowerCasePage)}
     >
      {page}

    </AnchorLink>
  )
}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage })=> {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDestop = useMediaQuery('(min-width:768px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-red'


 
    return (
    <nav>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-3xl font-bold'>
        EJ
        </h4>

        { /*Desktop Nav*/}
        {
          isDestop ? (
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              < Link
              page = 'Home'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Skills'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Projects'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Testimonials'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Contact'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />

            </div>
          ):(
          <button
          className="rounded-full bg-red p-2" 
          onClick={()=> setIsMenuToggled(!isMenuToggled)} 
          >
             <img alt='menu-icon' src='../assets/menu-icon.svg'></img>
          </button>
          ) }
          {/* Mobile Menu Popup  */}
          {!isDestop && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
              <div className="flex justify-items-end p-12">
                <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                  <img src="../assets/close-icon.svg" alt="close-icon" />
                </button>
              </div>

              {/*Menu Items*/}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              < Link
              page = 'Home'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Skills'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Projects'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Testimonials'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
                  < Link
              page = 'Contact'
              selectedPage={selectedPage }
              setSelectedPage={setSelectedPage}
               />
              </div>
            </div>
            
          )}
      </div>
    </nav>
  )
}

export default Navbar
