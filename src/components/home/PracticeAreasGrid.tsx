import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import practiceAreasData from '@/data/practiceAreas.json';

export default function PracticeAreasGrid() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeader
          title="Our Practice Areas"
          subtitle="Comprehensive legal services across all major areas of law. Our experienced advocates are ready to assist you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {practiceAreasData.practiceAreas.map((area, index) => (
            <Link
              key={area.id}
              href={`/practice#${area.id}`}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-100"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-accent-500 flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon
                  name={area.icon}
                  className="w-7 h-7 text-primary-800 group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-heading font-semibold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                {area.title}
              </h3>
              <p className="text-xs text-neutral-500 mb-3">{area.titleTamil}</p>
              <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                {area.description}
              </p>
              <div className="flex items-center text-accent-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/practice" className="btn-secondary group">
            View All Practice Areas
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

