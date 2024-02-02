import Image from "next/image"
import StepCard from "../Cards/StepCard"
import "./Syllabus.css"

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

type Props = {}

export default function Syllabus({}: Props) {
  return (
    <section className="syllabus">
      <div className="syllabus-wrapper">
        <div className="container">
          <div className="syllabus-inner">
            <div className="syllabus-img">
              <Image
                src="/images/computer-couch.png"
                width={602}
                height={444}
                alt=""
              />
            </div>

            <div className="syllabus-steps">
              <h2 className="section-title">Syllabus of courses</h2>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
