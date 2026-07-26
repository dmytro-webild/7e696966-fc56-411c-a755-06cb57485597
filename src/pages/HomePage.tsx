import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="Summit Digital"
      description="Elevate your online presence with professional, high-performance website design built for growth and impact."
      primaryButton={{
        text: "Get Started",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345405.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Built for Success"
      descriptions={[
        "Summit Digital transforms your business ideas into high-converting digital realities. We specialize in bespoke, performance-driven web solutions designed to scale your reach and streamline your operations.",
        "Our philosophy is rooted in technical excellence and user-centered design, ensuring your site is not just beautiful, but a true catalyst for your brand's growth.",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCards
      tag="Our Services"
      title="End-to-End Solutions"
      description="Comprehensive development services tailored to your specific business requirements."
      items={[
        {
          title: "Performance Optimization",
          description: "Blazing fast load times and clean code for better SEO and user satisfaction.",
          imageSrc: "http://img.b2bpic.net/free-photo/internet-speed-test-software-concept_53876-120681.jpg",
        },
        {
          title: "SEO & Strategy",
          description: "Advanced search engine optimization to ensure your site is found by the right audience.",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-hologram-indoors_23-2151833347.jpg",
        },
        {
          title: "Responsive Design",
          description: "Flawless mobile, tablet, and desktop experience to keep your customers engaged.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-tablet-desk-with-copy-space_23-2148697018.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>


  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Performance"
      title="Quantifiable Growth"
      description="We don't just build sites; we build performance engines."
      metrics={[
        {
          value: "2x",
          title: "Avg Conversion Lift",
          features: [
            "Speed optimized",
            "SEO refined",
          ],
        },
        {
          value: "98/100",
          title: "Avg PageSpeed Score",
          features: [
            "Perfectly optimized",
            "Clean architecture",
          ],
        },
        {
          value: "40%",
          title: "Avg Traffic Increase",
          features: [
            "SEO best practices",
            "Modern tech stack",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Clients"
      title="Trusted by Leaders"
      description="See why businesses trust Summit Digital for their online growth."
      testimonials={[
        {
          name: "Alex Rivet",
          role: "CEO",
          company: "TechInnovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/project-manager-sitting-office-desk_482257-127147.jpg",
        },
        {
          name: "Sarah Chen",
          role: "Founder",
          company: "GrowthLab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-mobile-phone_107420-84909.jpg",
        },
        {
          name: "Mark D.",
          role: "CMO",
          company: "MarketFlow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/spectacular-african-man-with-sincere-smile-posing-outdoor-photo-cute-black-male-model-glasses-headphones_197531-21894.jpg",
        },
        {
          name: "Elena V.",
          role: "Director",
          company: "StyleStudio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-businesswoman-with-charming-smile-posing-street-with-interesting-architecture-background_613910-14028.jpg",
        },
        {
          name: "James K.",
          role: "Owner",
          company: "SummitGear",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-with-crossed-arms_23-2147955274.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Partnerships"
      title="Our Network"
      description="Collaborating with industry-leading technology platforms."
      names={[
        "TechCorp",
        "InnovateLab",
        "GrowthCo",
        "StartupXYZ",
        "DigitalMedia",
        "CloudSolutions",
        "DataFlow",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Help"
      title="Common Questions"
      description="Answers to help you get started with Summit Digital."
      items={[
        {
          question: "What is the timeline for a website?",
          answer: "Most projects are completed within 4-6 weeks depending on complexity.",
        },
        {
          question: "Do you offer maintenance?",
          answer: "Yes, we provide ongoing maintenance and performance monitoring services.",
        },
        {
          question: "How do payments work?",
          answer: "We typically operate on a 50% deposit with the balance due upon project completion.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Launch"
      text="Ready to build your masterpiece?"
      primaryButton={{
        text: "Schedule Consultation",
        href: "mailto:hello@summitdigital.com",
      }}
      secondaryButton={{
        text: "View Portfolio",
        href: "#features",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
