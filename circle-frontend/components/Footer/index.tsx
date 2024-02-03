import { mainMenu } from "@/data"
import "./Footer.css"
import Link from "next/link"
import SocialLinks from "../SocialLinks"

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="footer-logo">
            <img src="./images/logo-color.svg" alt="" />
          </Link>

          <div className="footer-top-right">
            <div className="footer-dash"></div>

            <ul className="footer-menu">
              {/* {mainMenu.map((item, index) => (
              <Link href="#" className="animate-link" key={index}>
                {item.title}
              </Link>
            ))} */}

              {mainMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="animate-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="footer-dash"></div>

            <ul className="footer-menu">
              <li>
                <Link
                  href="http://www.halo-lab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-link"
                >
                  www.halo-lab.com
                </Link>
              </li>
              <li>
                <Link href="tel:+380962722100" className="animate-link">
                  +38 096 272 2100
                </Link>
              </li>
              <li>
                <Link href="mailto:mail@halo-lab.com" className="animate-link">
                  mail@halo-lab.com
                </Link>
              </li>
              <li>Ukraine, Odessa</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <Link href="#" className="copyright">
            <div className="copyright-logo">
              <img src="./images/logo-copyright.svg" alt="logo" />
            </div>

            <div className="copyright-text">
              {new Date().getFullYear()} Halo Lab. All rights reserved
            </div>
          </Link>

          <SocialLinks />
        </div>
      </div>

      <div className="footer-follow">
        <div className="container">
          <div className="follow-text">
            <span className="follow-icon">
              <svg
                width="35"
                height="33"
                viewBox="0 0 35 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_310_4123)">
                  <path
                    d="M23.3077 15.7259L17.1024 22.5002L10.897 15.7259C9.6585 14.3738 9.70835 12.2947 11.0103 11.0027C12.4639 9.55999 14.8585 9.69161 16.1427 11.2848L17.1024 12.4753L18.062 11.2848C19.3463 9.69161 21.7408 9.55999 23.1945 11.0027C24.4964 12.2947 24.5462 14.3738 23.3077 15.7259Z"
                    fill="#FFE336"
                    fillOpacity="0.5"
                  ></path>
                </g>
                <path
                  d="M23.3077 15.7259L17.1024 22.5002L10.897 15.7259C9.6585 14.3738 9.70835 12.2947 11.0103 11.0027C12.4639 9.55999 14.8585 9.69161 16.1427 11.2848L17.1024 12.4753L18.062 11.2848C19.3463 9.69161 21.7408 9.55999 23.1945 11.0027C24.4964 12.2947 24.5462 14.3738 23.3077 15.7259Z"
                  fill="#FFE336"
                ></path>
                <defs>
                  <filter
                    id="filter0_f_310_4123"
                    x="0"
                    y="0"
                    width="34.2051"
                    height="32.5"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="5"
                      result="effect1_foregroundBlur_310_4123"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
            </span>
            <Link
              href="https://webflow.com/website/Sircle-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Like
            </Link>{" "}
            <span className="follow-and">&amp;</span>{" "}
            <Link
              href="https://webflow.com/halolab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </Link>{" "}
            from you. New free to use projects from us.
          </div>
        </div>
      </div>
    </footer>
  )
}
