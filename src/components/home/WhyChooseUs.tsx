import SectionHeader from '@/components/ui/SectionHeader';
import StatsCounter from '@/components/ui/StatsCounter';
import Icon from '@/components/ui/Icon';
import siteConfig from '@/data/siteConfig.json';

const stats = [
  { value: siteConfig.stats.yearsExperience, label: 'Years Experience' },
  { value: siteConfig.stats.casesWon, label: 'Cases Won' },
  { value: siteConfig.stats.happyClients, label: 'Happy Clients' },
  { value: siteConfig.stats.successRate, label: 'Success Rate' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Experience the difference of working with a team that genuinely cares about your legal success."
          light
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {siteConfig.whyChooseUs.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="w-7 h-7 text-accent-400" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 pt-16">
          <StatsCounter stats={stats} />
        </div>
      </div>
    </section>
  );
}

