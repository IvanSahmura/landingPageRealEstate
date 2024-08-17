import Image from "next/image";
import Nav from "./components/NavBar/Nav";
import Hero from "./components/Header/Hero";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Footer />
    </main>
  );
}
