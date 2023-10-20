import { useState, useEffect } from "react";

// building useEffect to check screen resizing and display

const useMediaQuery  = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect (() =>{
        const media = window.matchMedia(query)
        if (media,matches !== matches){
            setMatches(media.matches)
        }
        const listener = ()=> {
            setMatches(setMatches)
        }
        window.addEventListener('resize',listener)
        return ()=>window.removeEventListener('resize',listener)
    }),[matches,query]

    return matches
 

}

 export default useMediaQuery