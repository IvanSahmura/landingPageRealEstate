import Image from "next/image";
import Nav from "./components/NavBar/Nav";
import Hero from "./components/Header/Hero";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}
