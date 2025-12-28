'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  showArrow?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  showArrow = false,
  loading = false,
  disabled = false,
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-accent-600 text-white hover:bg-accent-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary:
      'bg-primary-800 text-white hover:bg-primary-900 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white',
    white:
      'bg-white text-primary-800 hover:bg-neutral-100 shadow-lg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
      {children}
      {showArrow && !loading && (
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, 'group')}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(classes, 'group')}
    >
      {content}
    </button>
  );
}

