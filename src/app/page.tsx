import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ModelCards from "./components/ModelCards";
import BlogCards from "./components/BlogCards";
import WelcomePopup from "./components/WelcomePopup";

export default function Home() {
  return (
    <>
      <WelcomePopup />
      <HeroSection />
      <AboutUs/>
      <ModelCards />
      <BlogCards />
    </>
  );
}
