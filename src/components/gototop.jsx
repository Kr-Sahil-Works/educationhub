import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function GoToTop(){

const [show,setShow]=useState(false)

useEffect(()=>{

const handleScroll=()=>{
  if(window.scrollY>300){
    setShow(true)
  }else{
    setShow(false)
  }
}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

const scrollTop=()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

if(!show) return null

return(

<button
onClick={scrollTop}
className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 p-3 rounded-full shadow-lg shadow-red-500/40 transition"
>

<ArrowUp size={20}/>

</button>

)

}