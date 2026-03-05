import { Card, CardContent } from "@/components/ui/card"
import {
  Book,
  Atom,
  Calculator,
  Beaker,
  Globe,
  LineChart,
  Briefcase,
  Laptop,
  Coins,
  Building
} from "lucide-react"

export default function Courses(){

const courses=[
 {name:"Mathematics",icon:Calculator},
 {name:"Physics",icon:Atom},
 {name:"Chemistry",icon:Beaker},
 {name:"Biology",icon:Book},
 {name:"Commerce",icon:Briefcase},
 {name:"Economics",icon:Coins},
 {name:"Business Studies",icon:Building},
 {name:"Computer Science",icon:Laptop},
 {name:"Statistics",icon:LineChart},
 {name:"Geography",icon:Globe}
]

return(

<section
 id="courses"
 className="relative py-28 px-6 overflow-hidden"
>

{/* subtle background glow */}
<div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900"/>

<div className="max-w-7xl mx-auto">

<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
Popular <span className="text-red-500">Courses</span>
</h2>

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

{courses.map((course,i)=>{

const Icon=course.icon

return(

<Card
 key={i}
 className="group bg-white/5 border border-white/10 backdrop-blur-xl hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/20 transition duration-300 hover:-translate-y-1"
>

<CardContent className="p-8 text-center">

<Icon
 className="mx-auto mb-4 text-red-500 group-hover:scale-110 transition"
/>

<h3 className="text-lg font-semibold text-gray-200">
{course.name}
</h3>

</CardContent>

</Card>

)

})}

</div>

</div>

</section>

)
}