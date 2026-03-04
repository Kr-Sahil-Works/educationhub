import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-36 pb-32 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-900 via-purple-900 to-red-700"/>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Find the right  
            <span className="text-red-500"> course </span>
            for you
          </motion.h1>

          <p className="text-gray-400 mt-6 text-lg max-w-lg">
            Learn faster with expert teachers and modern study methods.
            Join thousands of students improving their results.
          </p>

          <div className="flex gap-6 mt-8">

            <Button className="bg-red-500 hover:bg-red-600 px-8 py-6 text-lg shadow-xl shadow-red-500/40">
              Find Courses
            </Button>

            <button className="text-gray-300 hover:text-white transition">
              View Programs →
            </button>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.8}}
          className="flex justify-center"
        >

          <img
            src="/girl.png"
            className="w-105"
          />

        </motion.div>

      </div>

      {/* STATS CARDS */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-xl">
          <span className="text-purple-400 text-sm">Education</span>
          <h3 className="text-3xl font-bold mt-2">40+</h3>
          <p className="text-gray-400 text-sm">Subjects</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-xl">
          <span className="text-yellow-400 text-sm">Online</span>
          <h3 className="text-3xl font-bold mt-2">120+</h3>
          <p className="text-gray-400 text-sm">Courses</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-xl">
          <span className="text-red-400 text-sm">Reviews</span>
          <h3 className="text-3xl font-bold mt-2">180k+</h3>
          <p className="text-gray-400 text-sm">Learners</p>
        </div>

      </div>

    </section>
  )
}