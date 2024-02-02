type Props = {
  icon?: string
  text: string
  desc: string
}

export default function StatCard({ icon, text, desc }: Props) {
  return (
    <div className="hero-stat-item">
      <div className="item-num">
        <img src={icon} alt="" />
        <div className="item-num-text">{text || 10}</div>
      </div>

      <p className="item-p">
        Ideal courses to sell physical and digital products from your site on
        WordPress.com
      </p>
    </div>
  )
}
