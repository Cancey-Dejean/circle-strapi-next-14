import Image from "next/image"
import "./SocialProof.css"

const companies = () => {
  return [
    {
      id: 1,
      name: "TransferWise",
      logo: "/images/hero_logo-01.svg",
    },
    {
      id: 2,
      name: "Woocommerce",
      logo: "/images/hero_logo-02.svg",
    },
    {
      id: 3,
      name: "Paypal",
      logo: "/images/hero_logo-03.svg",
    },
    {
      id: 4,
      name: "Payoneer",
      logo: "/images/hero_logo-04.svg",
    },
  ]
}

type Props = {}

export default function SocialProof({}: Props) {
  return (
    <div className="social-proof">
      {companies().map((company) => (
        <Image
          src={company.logo}
          alt={company.name}
          width={237}
          height={43}
          key={company.id}
        />
      ))}
    </div>
  )
}
