import ReviewCard from "../Cards/ReviewCard"
import "./Reviews.css"

const reviews = [
  {
    reviewerImg: "/images/ava-03.png",
    name: "Anna Tyuneva",
    review:
      "The course is great! Teachers talks very interesting and accessible. Thank you very much!",
  },
  {
    reviewerImg: "/images/ava-02.png",
    name: "Mykola Dunayev",
    review:
      "The course is clear enough. Well explained a lot of practice. I recommend to everyone!",
  },
  {
    reviewerImg: "/images/ava-01.png",
    name: "Nastya Kozarchuk",
    review:
      "The training was in one breath. Very accessible courses, everything is very clear and good.",
  },
]

type Props = {}

export default function Reviews({}: Props) {
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-header">
          <h3 className="section-title">Students reviews</h3>
        </div>

        <div className="review-grid">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              review={review.review}
              reviewerImg={review.reviewerImg}
            />
          ))}

          {/* <div className="review-item">
            <div className="item-num">
              <img src="/images/ava-03.png" alt="Background art" />

              <img
                src="/images/spot.svg"
                loading="lazy"
                alt="Spot"
                className="ava-spot"
              />

              <div className="ava-circle"></div>
              <div className="ava-dot"></div>
            </div>

            <h4 className="item-title">Anna Tyuneva</h4>

            <p className="item-p">
              The course is great! Teachers talks very interesting and
              accessible. Thank you very much!
            </p>
            <div className="reviews-dash"></div>
          </div> */}

          {/* <div className="review-item">
            <div className="item-num">
              <img src="/images/ava-02.png" alt="Background art" />

              <img
                src="/images/spot.svg"
                loading="lazy"
                alt="Spot"
                className="ava-spot"
              />

              <div className="ava-circle"></div>
              <div className="ava-dot"></div>
            </div>

            <h4 className="item-title">Mykola Dunayev</h4>

            <p className="item-p">
              The course is clear enough. Well explained a lot of practice. I
              recommend to everyone!
            </p>
            <div className="reviews-dash"></div>
          </div>

          <div className="review-item">
            <div className="item-num">
              <img src="/images/ava-01.png" alt="Background art" />

              <img
                src="/images/spot.svg"
                loading="lazy"
                alt="Spot"
                className="ava-spot"
              />

              <div className="ava-circle"></div>
              <div className="ava-dot"></div>
            </div>

            <h4 className="item-title">Nastya Kozarchuk</h4>

            <p className="item-p">
              The training was in one breath. Very accessible courses,
              everything is very clear and good.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
