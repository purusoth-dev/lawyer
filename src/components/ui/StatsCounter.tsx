'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  className?: string;
}

export default function StatsCounter({ stats, className }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-2 md:grid-cols-4 gap-8',
        className
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            'text-center transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-4xl md:text-5xl font-heading font-bold text-accent-500 mb-2">
            {stat.value}
          </div>
          <div className="text-neutral-300 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

