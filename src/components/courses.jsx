import { Card, CardContent } from "@/components/ui/card"
import { Book, Atom, Calculator, Beaker } from "lucide-react"

export default function Courses(){

const courses=[
 {name:"Mathematics",icon:Calculator},
 {name:"Physics",icon:Atom},
{name:"Chemistry",icon:Beaker},
 {name:"Biology",icon:Book}
]

return(

<section id="courses" className="py-24 max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">
Popular Courses
</h2>

<div className="grid md:grid-cols-4 gap-6">

{courses.map((course,i)=>{

const Icon=course.icon

return(

<Card key={i} className="bg-white/5 border-white/10 hover:scale-105 transition">

<CardContent className="p-8 text-center">

<Icon className="mx-auto mb-4 text-red-500"/>

<h3 className="text-lg font-semibold">
{course.name}
</h3>

</CardContent>

</Card>

)

})}

</div>

</section>

)
}