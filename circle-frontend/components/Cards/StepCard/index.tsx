import Image from "next/image"

type Props = {
  number: string
  title: string
  desc: string
  imgArrow?: string
  altCard?: boolean
}

export default function StepCard({
  number,
  title,
  desc,
  imgArrow,
  altCard,
}: Props) {
  return (
    <div className={`syllabus-step ${altCard ? "step-alt" : ""}`}>
      <div className="syllabus-step-num">
        <Image
          src="/images/step_numb-01.svg"
          width={49}
          height={53}
          alt="Step 1"
        />
        <div className="syllabus-num-text">{number}</div>
      </div>

      <h3 className="item-title">{title}</h3>

      <p className="item-p">{desc}</p>

      <div className="step-arrow-wrap">
        <img src={imgArrow} alt="" className="step-arrow-img" />
      </div>
    </div>
  )
}
