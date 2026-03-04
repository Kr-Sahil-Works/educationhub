import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-xl mx-auto text-center">

      <h2 className="text-3xl font-bold mb-10">
        Contact Us
      </h2>

      <div className="space-y-4">

        <Input placeholder="Your Name" />

        <Input placeholder="Phone Number" />

        <Textarea placeholder="Message" />

        <Button className="w-full">
          Send Message
        </Button>

      </div>

    </section>
  )
}