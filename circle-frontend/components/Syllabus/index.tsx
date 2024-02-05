import Image from "next/image"
import StepCard from "../Cards/StepCard"
import "./Syllabus.css"
import { config } from "@/libs/config"

type Props = {
  children: React.ReactNode
  title: string
  image: string
  imageAlt: string
}

export default function Syllabus({ children, title, image, imageAlt }: Props) {
  return (
    <section className="syllabus">
      <div className="syllabus-wrapper">
        <div className="container">
          <div className="syllabus-inner">
            <div className="syllabus-img">
              <Image
                src={config.api + image}
                width={602}
                height={444}
                alt={imageAlt}
              />
            </div>

            <div className="syllabus-steps">
              <h2 className="section-title">{title}</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
