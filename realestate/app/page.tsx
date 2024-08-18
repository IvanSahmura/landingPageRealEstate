import Image from "next/image";
import Nav from "./components/NavBar/Nav";
import Hero from "./components/Header/Hero";
import Footer from "./components/footer/Footer";
import Cards from "./components/cards/Cards";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-8">
          <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
          />

          <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
          />

          <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
          />

          <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
          />
           <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
          />

           <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
          />

          <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
          />

           <Cards 
          imageUrl={""} 
          title={"KING"} 
          price={10000}       
          bedrooms={2} 
          bathrooms={3} 
          sqft={1200} 
          address={"JLN KETINTANG"} 
              />


        </div>
      </div>
      <Footer />
    </main>
  );
}
