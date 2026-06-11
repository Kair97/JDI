import About from '@/components/About';
import Footer from '@/components/Footer';
import Guarantee from '@/components/Guarantee';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import OrderForm from '@/components/OrderForm';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import TechStack from '@/components/TechStack';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Stats />
        <TechStack />
        <About />
        <Guarantee />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
