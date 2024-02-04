import Image from "next/image"
import { config } from "@/libs/config"
import { ButtonLink, ButtonLinkProps } from "../ButtonLink"
import StatCard from "../Cards/StatCard"
import SocialProof from "../SocialProof"
import "./Hero.css"

type Props = {
  title: string
  desc?: string
  image?: string
  btnLabel?: string
  btnUrl?: string
  btnVariant?: ButtonLinkProps["variant"]
  btnSize?: ButtonLinkProps["size"]
  className?: string
}

export default function Hero({
  title,
  desc,
  image,
  className,
  btnLabel,
  btnUrl,
  btnVariant,
  btnSize,
}: Props) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-inner-content">
            <div className="hero-inner-text">
              <h1 className="hero-title">{title}</h1>

              <p className="subheading hero-desc">{desc}</p>

              <ButtonLink
                as="a"
                url={btnUrl || "#"}
                variant={btnVariant}
                size={btnSize}
                className="hero-btn"
                label={btnLabel}
              />
            </div>

            <div className="hero-inner-imgs">
              <Image
                className="person-img"
                src={config.api + image || "/images/hero_illustr-person.svg"}
                alt="Person in chair"
                width={603}
                height={497}
                priority
              />
              <Image
                className="paper-plane"
                src="/images/hero_illustr-plane.svg"
                alt="Paper plane"
                width={90}
                height={90}
              />
            </div>
          </div>

          {/* <!-- Social Proof --> */}
          <SocialProof />

          {/* <!-- hero Stats --> */}
          <div className="hero-stats">
            <StatCard
              icon="/images/hero_numb.svg"
              text="200+"
              desc="Ideal courses to sell physical and digital products from your site on WordPress.com"
            />
            <StatCard
              icon="/images/hero_numb.svg"
              text="150+"
              desc="Experts share their knowledge on building and growing a web presence."
            />
            <StatCard
              icon="/images/hero_numb.svg"
              text="10k+"
              desc="Small businesses and online stores call WordPress.com home. No code, no complexities."
            />

            {/* <div className="hero-stat-item">
              <div className="item-num">
                <img src="/images/hero_numb.svg" alt="Background art" />
                <div className="item-num-text">150+</div>
              </div>

              <div className="item-p">
                Experts share their knowledge on building and growing a web
                presence.
              </div>
            </div> */}

            {/* <div className="hero-stat-item">
              <div className="item-num">
                <img src="/images/hero_numb.svg" alt="Background art" />
                <div className="item-num-text">10k+</div>
              </div>

              <div className="item-p">
                Small businesses and online stores call WordPress.com home. No
                code, no complexities.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
