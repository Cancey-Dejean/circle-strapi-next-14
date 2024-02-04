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
    `${config.api}/api/pages?populate[Blocks][populate]=*&filters[slug][$eq]=home`,
    requestOptions
  )

  const response = await request.json()
  return response
}

export default async function Home() {
  const page = await getPages()
  const data = page.data[0].attributes.Blocks[0]

  console.log(data.button.url)

  return (
    <>
      <Hero
        title={data.title}
        desc={data.desc}
        image={data.image.data.attributes.url}
        btnLabel={data.button.label}
        btnUrl={data.button.url}
        btnVariant={data.button.variant}
      />

      <Syllabus />
      <Services />
      <Reviews />
      <Questions />
    </>
  )
}
