import Link from "next/link"
import React from "react"

type Props = {
  children?: React.ReactNode
  url?: string
  title: string
  tag: string
}

export default function ServiceCard({ children, url, title, tag }: Props) {
  return (
    <div className="service-card">
      <div className="service-card-head">
        <h4 className="service-card-tag">{tag}</h4>

        <h3 className="service-title item-title">{title}</h3>
      </div>

      <Link href={url || ""} className="service-read-more">
        Read more
      </Link>

      <div className="service-img-container">
        <div className="service-img">{children}</div>
      </div>

      <div className="bg-hover"></div>
    </div>
  )
}
