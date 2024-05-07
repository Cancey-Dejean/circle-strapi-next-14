import StatCard from "@/components/Cards/StatCard";
import StepCard from "@/components/Cards/StepCard";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero
        title="Your next big idea starts here"
        desc="The ideal framework to learn how to manage all aspects of startup."
        image="/images/hero_illustr.svg"
        btnLabel="START FOR FREE"
        btnUrl="#"
        btnVariant="primary"
      >
        <SocialProof>
          <Image
            src="/images/hero_logo-01.svg"
            alt=""
            width={240}
            height={44}
          />
        </SocialProof>

        <HeroStats>
          <StatCard
            statText="200+"
            desc="Ideal courses to sell physical and digital products from your site on WordPress.com"
          />
        </HeroStats>
      </Hero>

      <Syllabus
        title="Syllabus of courses"
        image="/images/computer-couch.png"
        imageAlt=""
      >
        <div className="syllabus-step-list">
          <StepCard
            title="Videos from professionals"
            number="1"
            desc="Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation."
          />
        </div>
      </Syllabus>

      <Services />
      <Reviews />
      <Questions />
    </>
  );
}

const HeroStats = ({ children }: { children: React.ReactNode }) => {
  return <div className="hero-stats">{children}</div>;
};
