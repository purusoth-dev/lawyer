import { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import StatsCounter from "@/components/ui/StatsCounter";
import siteConfig from "@/data/siteConfig.json";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SKS Law Associates, Chennai's trusted law firm with 5 years of experience. Meet our team of expert advocates dedicated to your legal success.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every case, ensuring the best possible outcomes for our clients.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Honesty and ethical practice are the cornerstones of our legal services.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We maintain open communication and keep clients informed at every stage.",
  },
  {
    icon: Users,
    title: "Compassion",
    description:
      "We understand legal challenges are stressful and approach each case with empathy.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Firm Established",
    description: "SKS Law Associates founded in Chennai",
  },
  {
    year: "2021",
    title: "Growing Practice",
    description: "Expanded services across multiple legal areas",
  },
  {
    year: "2022",
    title: "100+ Cases",
    description: "Crossed milestone of 100 successful cases",
  },
  {
    year: "2023",
    title: "High Court Practice",
    description: "Expanded to Madras High Court representation",
  },
  {
    year: "2024",
    title: "500+ Cases",
    description: "Crossed milestone of 500 successful cases",
  },
  {
    year: "2025",
    title: "Continued Growth",
    description: "Expanding services and client base in Chennai",
  },
];

const stats = [
  { value: siteConfig.stats.yearsExperience, label: "Years Experience" },
];

const affiliations = [
  "Bar Council of Tamil Nadu",
  "Tambaram Bar Association",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Our Firm"
        subtitle="Over 5 years of dedicated legal service, fighting for justice across Chennai and Tamil Nadu."
      />

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <div
                className="h-[500px] rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/about-firm.jpg)",
                  backgroundColor: "#1a365d",
                }}
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent-500/30 rounded-2xl" />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center">
                    <Scale className="w-7 h-7 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary-900">
                      Since 2020
                    </div>
                    <div className="text-neutral-500">Serving Justice</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="gold-line mb-6" />
              <h2 className="section-title mb-6">
                Legal Excellence in Chennai
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Since 2020, <strong className="text-primary-900">SKS Law Associates</strong> has been at the forefront of legal excellence in Chennai. Our firm combines deep legal expertise with a genuine commitment to client success. We handle cases across all courts—from Magistrate Courts to the High Court.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Enrolled with Bar Council since 2020",
                  "Practice in Magistrate Courts to High Court",
                  "Bilingual services (English & Tamil)",
                  "Dedicated legal support available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at SKS Law Associates."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-800" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in our 5 years of legal practice."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-200 hidden lg:block" />

            <div className="space-y-8 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`lg:flex items-center ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2 lg:px-12">
                    <div
                      className={`bg-neutral-50 rounded-xl p-6 ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <span className="text-accent-600 font-heading font-bold text-2xl">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-primary-900 mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600 mt-1">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-8 h-8 rounded-full bg-accent-500 border-4 border-white shadow-lg z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionHeader
            title="Professional Affiliations"
            subtitle="We are proud members of these esteemed legal organizations."
          />

          <div className="flex flex-wrap justify-center gap-4">
            {affiliations.map((affiliation) => (
              <div
                key={affiliation}
                className="bg-white rounded-lg px-6 py-4 shadow-md flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-accent-500" />
                <span className="font-medium text-primary-900">
                  {affiliation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Our experienced advocates are here to help. Schedule a
            consultation to discuss your legal needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 group">
            Book Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
