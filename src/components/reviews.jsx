import { Card, CardContent } from "@/components/ui/card"

export default function Reviews(){

const reviews=[
 {name:"Rahul",text:"Best teachers and clear explanations."},
 {name:"Priya",text:"Helped me improve my exam marks."},
 {name:"Aman",text:"Very disciplined study environment."}
]

return(

<section id="reviews" className="py-24 bg-white/5">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">
Student Reviews
</h2>

<div className="grid md:grid-cols-3 gap-6">

{reviews.map((r,i)=>(

<Card key={i} className="bg-white/5 border-white/10">

<CardContent className="p-6">

<p className="text-gray-300 mb-4">
{r.text}
</p>

<h4 className="text-red-400 font-semibold">
{r.name}
</h4>

</CardContent>

</Card>

))}

</div>

</div>

</section>

)
}