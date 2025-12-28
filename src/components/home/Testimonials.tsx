import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import testimonialsData from '@/data/testimonials.json';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="We take pride in the trust our clients place in us. Here's what they have to say about their experience."
        />

        <TestimonialsCarousel testimonials={testimonialsData.testimonials} />
      </div>
    </section>
  );
}

