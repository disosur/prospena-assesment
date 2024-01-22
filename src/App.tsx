import Banner from "./sections/Banner";
import Catergory from "./sections/Catergory";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Product from "./sections/Product";
import BG from "./assets/background.jpg";
import Footer from "./sections/Footer";

export default function App() {
  const HeroStyle: React.CSSProperties = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className="overflow-hidden">
      <div style={HeroStyle}>
        <div className="z-50">
          <Navbar />
        </div>
        <div className="z-10">
          <Hero />
        </div>
      </div>

      <Catergory />
      <Banner />
      <Product />
      <Footer />
    </main>
  );
}
