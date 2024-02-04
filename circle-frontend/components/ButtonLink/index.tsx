import "./ButtonLink.css"
import { cn } from "../../libs/utils"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export type ButtonLinkProps = {
  as: "a" | "button"
  variant?: "primary" | "secondary"
  size?: "medium" | "large"
  url?: string
  className?: string
  label?: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonLink = ({
  as = "a",
  variant = "primary",
  size = "medium",
  label,
  url,
  className = "",
  ...rest
}: ButtonLinkProps) => {
  const Element = as
  return (
    <Element
      className={cn(
        "btn-base",
        className,
        variant === "primary" ? "btn-prime" : "",
        variant === "secondary" ? "btn-prime-secondary" : "",
        size === "large" ? "min-w-[260px]" : "",
        size === "medium" ? "!py-4" : ""
      )}
      href={url}
      {...rest}
    >
      <div className="btn-bg"></div>

      <span className="btn-text">{label || "Text goes here"}</span>
    </Element>
  )
}
