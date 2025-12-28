import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      <div className={cn('mb-4', centered ? 'gold-line-center' : 'gold-line')} />
      <h2
        className={cn(
          'section-title mb-4',
          light ? 'text-white' : 'text-primary-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'section-subtitle',
            centered && 'mx-auto',
            light ? 'text-neutral-300' : 'text-neutral-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

