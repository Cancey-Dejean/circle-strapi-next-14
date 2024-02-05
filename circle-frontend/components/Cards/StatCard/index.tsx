import Image from "next/image"

type Props = {
  statText: string
  desc: string
}

export default function StatCard({ statText, desc }: Props) {
  return (
    <div className="hero-stat-item">
      <div className="item-num">
        <Image
          src="/images/hero_numb.svg"
          alt="Card Circle"
          width={177}
          height={114}
        />
        <div className="item-num-text">{statText}</div>
      </div>

      <p className="item-p">{desc}</p>
    </div>
  )
}
