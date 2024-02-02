import Image from "next/image"

type Props = {
  reviewerImg?: string
  name?: string
  review?: string
}

export default function ReviewCard({
  reviewerImg,

  name,
  review,
}: Props) {
  return (
    <div className="review-item">
      <div className="item-num">
        <Image
          src={reviewerImg || "/images/ava-03.png"}
          width={123}
          height={116}
          alt={name || "Review's Name"}
        />

        <Image
          src="/images/spot.svg"
          loading="lazy"
          alt="Spot"
          className="ava-spot absolute bottom-[-5px] left-[18px] z-[1]"
          width={21}
          height={21}
        />

        <div className="ava-circle"></div>
        <div className="ava-dot"></div>
      </div>

      <h4 className="item-title">{name}</h4>

      <p className="item-p">{review}</p>
      <div className="reviews-dash"></div>
    </div>
  )
}
