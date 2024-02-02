import "./ButtonLink.css"
import { cn } from "../../libs/utils"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

type ButtonLinkProps = {
  as: "a" | "button"
  variant?: "primary" | "secondary"
  size?: "medium" | "large"
  href?: string
  className?: string
  children?: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonLink = ({
  as = "a",
  variant = "primary",
  size = "medium",
  children,
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
      {...rest}
    >
      <div className="btn-bg"></div>

      <span className="btn-text">{children || "Text goes here"}</span>
    </Element>
  )
}
