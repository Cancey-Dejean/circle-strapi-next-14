import Image from "next/image"
import "./SocialProof.css"

export type SocialProofProps = {
  children: React.ReactNode
}

export default function SocialProof({ children }: SocialProofProps) {
  return <div className="social-proof">{children}</div>
}
