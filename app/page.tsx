import About from '@/components/About';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
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
      <ScrollProgress />
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
      <FloatingWhatsApp />
    </>
  );
}
