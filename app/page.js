import Footer from "./components/footer";
import About from "./pages/About";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";
import HeroSection from "./pages/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Details />
      <Gallery />
      <Footer/>
    </>
  );
}
