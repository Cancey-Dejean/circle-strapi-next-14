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

const steps = [
  {
    number: "01",
    title: "Videos from professionals",
    desc: "Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation.",
    imgArrow: "/images/steps_arrow.svg",
    altCard: false,
  },
  {
    number: "02",
    title: "Practical independent work",
    desc: "Learn how to organize your website, create engaging content, protect your site, and achieve search engine rankings.",
    imgArrow: "/images/steps_arrow.svg",
    altCard: true,
  },
  {
    number: "03",
    title: "Feedback from specialists",
    desc: "Structure and visualize new knowledge. You send the practical work to the reviewing specialists and receive individual feedback.",
    imgArrow: "/images/steps_arrow-plane.svg",
    altCard: false,
  },
]

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
  const data = page.data[0].attributes.Blocks

  console.log(data[3].image.data.attributes.alternativeText)

  return (
    <>
      <Hero
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
      </Hero>

      <Syllabus
        title={data[3].title}
        image={data[3].image.data.attributes.formats.thumbnail.url}
        imageAlt={data[3].image.data.attributes.alternativeText}
      >
        <div className="syllabus-step-list">
          {steps.slice(0, 3).map((step, index) => (
            <StepCard
              title={step.title}
              number={step.number}
              desc={step.desc}
              key={index}
              altCard={step.altCard}
              imgArrow={step.imgArrow}
            />
          ))}
        </div>
      </Syllabus>

      <Services />
      <Reviews />
      <Questions />
    </>
  )
}

const HeroStats = ({ children }: { children: React.ReactNode }) => {
  return <div className="hero-stats">{children}</div>
}
