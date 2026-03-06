import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar(){

const [open,setOpen]=useState(false)
const [active,setActive]=useState("")
const [show,setShow]=useState(true)
const [lastScroll,setLastScroll]=useState(0)

const sections=["courses","reviews","contact"]

/* scroll spy */

useEffect(()=>{

const handleScroll=()=>{

let current=""

sections.forEach(id=>{

const section=document.getElementById(id)

if(section){

const top=section.offsetTop-120
const height=section.offsetHeight

if(window.scrollY>=top && window.scrollY<top+height){
current=id
}

}

})

setActive(current)

/* hide navbar on scroll down */

const currentScroll=window.scrollY

if(currentScroll>lastScroll && currentScroll>80){
setShow(false)
}else{
setShow(true)
}

setLastScroll(currentScroll)

}

window.addEventListener("scroll",handleScroll)

return()=>window.removeEventListener("scroll",handleScroll)

},[lastScroll])

return(

<motion.nav
initial={{y:0}}
animate={{y:show?0:-100}}
transition={{duration:.35}}
className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10"
>

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

{/* Logo */}

<a href="#" className="relative flex items-center">

{/* glow behind logo */}

<div className="absolute inset-0 blur-xl opacity-40 bg-red-500/40 rounded-full"/>

<img
src="/logo.png"
className="relative h-10 w-auto logo-shine"
/>

</a>

{/* Desktop Menu */}

<div className="hidden md:flex items-center gap-10 text-sm text-gray-300">

{sections.map((item)=>{

const label=item.charAt(0).toUpperCase()+item.slice(1)

return(

<a
key={item}
href={`#${item}`}
className="relative hover:text-white transition"
>

{label}

{active===item &&(

<motion.div
layoutId="nav-highlight"
className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-500"
transition={{type:"spring",stiffness:400,damping:30}}
/>

)}

</a>

)

})}

</div>

{/* Right side */}

<div className="flex items-center gap-4">

<Button className="hidden md:inline-flex bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30">
Enroll
</Button>

<button
onClick={()=>setOpen(!open)}
className="md:hidden text-white"
>

{open ? <X size={26}/> : <Menu size={26}/>}

</button>

</div>

</div>

{/* Mobile menu */}

<AnimatePresence>

{open &&(

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-20}}
transition={{duration:.25}}
className="md:hidden backdrop-blur-xl bg-white/5 border-t border-white/10"
>

<div className="flex flex-col items-center gap-6 py-8 text-gray-200">

<a href="#courses" onClick={()=>setOpen(false)}>Courses</a>
<a href="#reviews" onClick={()=>setOpen(false)}>Reviews</a>
<a href="#contact" onClick={()=>setOpen(false)}>Contact</a>

<Button className="bg-red-500 hover:bg-red-600">
Enroll
</Button>

</div>

</motion.div>

)}

</AnimatePresence>

</motion.nav>

)
}