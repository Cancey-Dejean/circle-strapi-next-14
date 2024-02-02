import Hero from "@/components/Hero"
import Questions from "@/components/Questions"
import Reviews from "@/components/Reviews"
import Services from "@/components/Services"
import Syllabus from "@/components/Syllabus"

export default function Home() {
  return (
    <>
      <Hero />
      <Syllabus />
      <Services />
      <Reviews />
      <Questions />
    </>
  )
}
