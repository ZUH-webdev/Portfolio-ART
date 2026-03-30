import Myprocess from "./pages/Myprocess";
import Testimonials from "./pages/Testimonials";
import Cta from "./pages/Cta";
import Footer from "./components/Footer";
import FeaturedWork from "./pages/Featuredwork";
import Header from './components/Header'
import Hero from './pages/Hero'
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen relative bg-[#030712] font-inter selection:bg-blue-500/30">
      
      <div className="fixed inset-0 grid-background opacity-20 pointer-events-none z-0" />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <Header />

      {/* 4. Content Layer */}
      <main className="relative z-10">
        <Hero />
        <About />
        <FeaturedWork />
        <Myprocess />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </div>
  )
}

export default App;