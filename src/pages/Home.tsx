
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import AboutCompany from '../components/AboutCompany';
import ClientShowcase from '../components/ClientShowcase';
import TeamSection from '../components/TeamSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCarousel />
      <AboutCompany />
      <ClientShowcase />
      <TeamSection />
    </div>
  );
};

export default Home;
