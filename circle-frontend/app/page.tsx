import StatCard from "@/components/Cards/StatCard"
import StepCard from "@/components/Cards/StepCard"
import Hero from "@/components/Hero"
import Questions from "@/components/Questions"
import Reviews from "@/components/Reviews"
import Services from "@/components/Services"
import SocialProof from "@/components/SocialProof"
import Syllabus from "@/components/Syllabus"
import { config } from "@/libs/config"
import Image from "next/image"

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
// http://localhost:1337/api/pages?populate=Blocks.StepCard&populate=Blocks.StatCard&filters[slug][$eq]=home
// /api/pages?populate[Blocks][populate]=*&filters[slug][$eq]=home
export default async function Home() {
  const page = await getPages()
  const data = page.data[0].attributes.Blocks
  // const data = page.data[0].attributes.Blocks

  console.log(data[0].title)
  // console.log(data[1].StepCard)
  // console.log(data[2].StepCard)
  // console.log(data[3].StepCard)

  return (
    <>
      {/* <Hero
        title={data[0].title}
        desc={data[0].desc}
        image={data[0].image.data.attributes.url}
        btnLabel={data[0].button.label}
        btnUrl={data[0].button.url}
        btnVariant={data[0].button.variant}
      >
        <SocialProof>
          {data[1].images.data.map(
            ({ id, attributes }: { id: number; attributes: any }) => (
              <Image
                src={config.api + attributes.url}
                alt={attributes.name}
                key={id}
                width={240}
                height={44}
              />
            )
          )}
        </SocialProof>

        <HeroStats>
          {data[2].StatCard.map(
            ({
              id,
              statText,
              desc,
            }: {
              id: number
              statText: string
              desc: string
            }) => (
              <StatCard statText={statText} desc={desc} key={id} />
            )
          )}
        </HeroStats>
      </Hero> */}

      {/* <Syllabus
        title={data[3].title}
        image={data[3].image.data.attributes.url}
        imageAlt={data[3].image.data.attributes.alternativeText}
      >
        <div className="syllabus-step-list">
          {data[3].StepCard.slice(0, 3).map(
            ({
              id,
              number,
              title,
              desc,
              altCard,
              imgArrow,
            }: {
              id: number
              number: string
              title: string
              desc: string
              altCard: boolean
              imgArrow: string
            }) => (
              <StepCard
                title={title}
                number={number}
                desc={desc}
                key={id}
                altCard={altCard}
                imgArrow={imgArrow}
              />
            )
          )}
        </div>
      </Syllabus> */}

      <Services />
      <Reviews />
      <Questions />
    </>
  )
}

const HeroStats = ({ children }: { children: React.ReactNode }) => {
  return <div className="hero-stats">{children}</div>
}
