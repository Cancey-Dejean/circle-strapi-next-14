import Image from "next/image";
import { config } from "@/libs/config";
import { ButtonLink, ButtonLinkProps } from "../ButtonLink";
import "./Hero.css";

type Props = {
  title: string;
  desc?: string;
  image?: string;
  btnLabel?: string;
  btnUrl?: string;
  btnVariant?: ButtonLinkProps["variant"];
  btnSize?: ButtonLinkProps["size"];
  children?: React.ReactNode;
  className?: string;
};

export default function Hero({
  title,
  desc,
  image,
  className,
  btnLabel,
  btnUrl,
  btnVariant,
  btnSize,
  children,
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
                src={image || "/images/hero_illustr.svg"}
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

          {children}
        </div>
      </div>
    </section>
  );
}
