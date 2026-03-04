import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-red-500">
          EducationHub
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-200">
          <a href="#courses">Courses</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <Button className="bg-red-500 hover:bg-red-600">
          Enroll
        </Button>

      </div>

    </nav>
  )
}