import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import PracticeAreasGrid from '@/components/home/PracticeAreasGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PracticeAreasGrid />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
