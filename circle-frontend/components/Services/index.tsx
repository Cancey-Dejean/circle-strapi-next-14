import Image from "next/image"
import ServiceCard from "../Cards/ServiceCard"

type Props = {}

export default function Services({}: Props) {
  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h3 className="section-title services-title">
            Professional courses on creating websites
          </h3>

          <p className="service-desc">
            Our courses are complete professional courses of high quality that
            include a set of video lessons, practical and training materials.
          </p>
        </div>

        <div className="services-inner">
          <ServiceCard
            title="How to make a quality site in WordPress in 40 hours without experience"
            tag="DESIGN"
          >
            <div className="hr-hand"></div>
            <Image
              src="/images/courses_illustr-clock.svg"
              className="service-img-item"
              width={213}
              height={233}
              alt=""
            />
          </ServiceCard>

          <ServiceCard
            title="WordPress: How to start in a developer without any basic knowledge"
            tag="PROGRAMMING"
          >
            <Image
              src="/images/courses_illustr-screen.svg"
              className="service-img-item service-img-item-2"
              alt=""
              width={224}
              height={206}
            />

            <Image
              src="/images/courses_illustr-screen2.svg"
              className="service-img-item"
              width={224}
              height={206}
              alt=""
            />
          </ServiceCard>

          <ServiceCard
            title="Creating dynamic sites with CMS WordPress + SEO for WordPress websites"
            tag="SEO"
          >
            <Image
              src="/images/courses_illustr-graph2.svg"
              className="service-img-item service-img-item-2"
              alt=""
              width={216}
              height={222}
            />

            <Image
              src="/images/courses_illustr-graph.svg"
              className="service-img-item"
              alt=""
              width={216}
              height={222}
            />
          </ServiceCard>
        </div>
      </div>
    </div>
  )
}
