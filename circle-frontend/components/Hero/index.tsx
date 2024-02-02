import { ButtonLink } from "../ButtonLink"
import StatCard from "../Cards/StatCard"
import SocialProof from "../SocialProof"
import "./Hero.css"
import Image from "next/image"

type Props = {
  className?: string
}

export default function Hero({ className }: Props) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-inner-content">
            <div className="hero-inner-text">
              <h1 className="hero-title">
                Your next big <span>idea starts here</span>
              </h1>

              <p className="subheading hero-desc">
                The ideal framework to learn how to manage all aspects of
                startup.
              </p>

              <ButtonLink
                as="a"
                href="#"
                variant="primary"
                className="hero-btn"
              >
                Hellp
              </ButtonLink>
            </div>

            {/* <!--  hero Images --> */}
            <div className="hero-inner-imgs">
              <Image
                className="person-img"
                src="/images/hero_illustr.svg"
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
              text="150+"
              desc="Experts share their knowledge on building and growing a web presence."
            />
            <StatCard
              icon="/images/hero_numb.svg"
              text="150+"
              desc="Experts share their knowledge on building and growing a web presence."
            />
            <StatCard
              icon="/images/hero_numb.svg"
              text="150+"
              desc="Experts share their knowledge on building and growing a web presence."
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
