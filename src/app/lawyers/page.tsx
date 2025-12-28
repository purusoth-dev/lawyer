import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  Award,
  GraduationCap,
  Languages,
  Briefcase,
} from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import lawyersData from '@/data/lawyers.json';

export const metadata: Metadata = {
  title: 'Our Lawyers',
  description:
    'Meet our team of experienced advocates at Sharma & Associates. Senior lawyers with expertise in Criminal Law, Family Law, Corporate Law, and more.',
};

export default function LawyersPage() {
  return (
    <>
      <PageHeader
        title="Our Legal Team"
        subtitle="Meet the experienced advocates who will fight for your rights. Our team combines expertise, dedication, and a genuine passion for justice."
      />

      {/* Lawyers Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {lawyersData.lawyers.map((lawyer, index) => (
              <div
                key={lawyer.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                {/* Image Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div
                      className="h-[500px] rounded-2xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${lawyer.image})`,
                        backgroundColor: '#1a365d',
                      }}
                    />
                    {/* Decorative */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-500/20 rounded-xl -z-10" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-300 rounded-xl" />

                    {/* Experience Badge */}
                    <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4">
                      <div className="text-2xl font-heading font-bold text-accent-600">
                        {lawyer.experience}
                      </div>
                      <div className="text-sm text-neutral-500">Experience</div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="gold-line mb-4" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-2">
                    {lawyer.name}
                  </h2>
                  <p className="text-accent-600 text-lg font-medium mb-6">
                    {lawyer.designation}
                  </p>

                  <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                    {lawyer.bio}
                  </p>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h3 className="flex items-center gap-2 font-semibold text-primary-900 mb-3">
                      <Briefcase className="w-5 h-5 text-accent-500" />
                      Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {lawyer.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="bg-primary-50 text-primary-800 px-4 py-1.5 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h3 className="flex items-center gap-2 font-semibold text-primary-900 mb-3">
                      <GraduationCap className="w-5 h-5 text-accent-500" />
                      Education
                    </h3>
                    <ul className="space-y-1 text-neutral-600">
                      {lawyer.education.map((edu) => (
                        <li key={edu}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="flex items-center gap-2 font-semibold text-primary-900 mb-3">
                      <Award className="w-5 h-5 text-accent-500" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {lawyer.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Languages */}
                  <div className="mb-8">
                    <h3 className="flex items-center gap-2 font-semibold text-primary-900 mb-3">
                      <Languages className="w-5 h-5 text-accent-500" />
                      Languages
                    </h3>
                    <p className="text-neutral-600">
                      {lawyer.languages.join(', ')}
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn-primary group">
                      Book Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={`mailto:${lawyer.email}`}
                      className="btn-outline flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Email Directly
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented legal professionals who share our
            passion for justice. If you&apos;re interested in joining Sharma & Associates,
            we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:careers@sharmaassociates.in"
            className="btn-secondary group"
          >
            <Mail className="w-5 h-5 mr-2" />
            careers@sharmaassociates.in
          </a>
        </div>
      </section>
    </>
  );
}

