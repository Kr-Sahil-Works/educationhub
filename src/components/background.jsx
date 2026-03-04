import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function Background(){

const particlesInit = async (main) => {
  await loadFull(main)
}

return(

<div className="absolute inset-0 -z-10">

<Particles
  init={particlesInit}
  options={{

    background:{
      color:"#0f172a"
    },

    particles:{
      number:{ value:40 },

      color:{ value:"#ef4444" },

      links:{
        enable:true,
        color:"#ef4444",
        opacity:0.2
      },

      move:{
        enable:true,
        speed:1
      },

      size:{
        value:2
      }
    }

  }}
/>

</div>

)
}