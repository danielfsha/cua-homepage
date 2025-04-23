import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative h-screen w-screen tracking-tight text-[20px] bg-[#F5F5F5] text-[#747474] overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
