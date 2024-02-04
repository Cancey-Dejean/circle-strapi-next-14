import Hero from "@/components/Hero"
import Questions from "@/components/Questions"
import Reviews from "@/components/Reviews"
import Services from "@/components/Services"
import Syllabus from "@/components/Syllabus"
import { config } from "@/libs/config"

const getPages = async () => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }
  const request = await fetch(
    `${config.api}/api/pages?populate=*&filters[title][$eq]=home`,
    requestOptions
  )

  const response = await request.json()
  return response
}

export default async function Home() {
  const pages = await getPages()
  console.log(pages.data)
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
