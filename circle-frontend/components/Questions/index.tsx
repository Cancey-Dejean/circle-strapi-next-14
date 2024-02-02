import Image from "next/image"
import { ButtonLink } from "../ButtonLink"

type Props = {}

export default function Questions({}: Props) {
  return (
    <div className="questions">
      <div className="container">
        <div className="questions-inner">
          <div className="questions-text">
            <h3 className="section-title questions-title">
              Still have questions?
            </h3>

            <p className="subheading">
              Leave a request and we will contact you to help you choose the
              best training format.
            </p>

            <form action="#" className="form">
              <div className="form-inner">
                <div className="input-wrap">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Your email"
                    className="input-field"
                    required
                  />
                </div>

                <div className="btn-container">
                  <ButtonLink as="button" type="button">
                    Submit
                  </ButtonLink>
                </div>
              </div>
            </form>
          </div>

          <div className="questions-img">
            <img
              src="./images/questions_illustr.svg"
              alt=""
              loading="lazy"
              className="main-q-img"
              width={569}
              height={430}
            />

            <Image
              src="./images/questions_illustr-bg.svg"
              className="main-q-img-bg"
              alt="Background"
              width={509}
              height={301}
            />

            <Image
              src="./images/questions_illustr-plane.svg"
              className="plane"
              alt="Plane"
              width={72}
              height={69}
            />

            <div className="questions-circle-border"></div>

            <div className="questions-circle-color"></div>

            <div className="questions-circle-dot"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
