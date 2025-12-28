import {
  Scale,
  Users,
  Heart,
  Building,
  Briefcase,
  HardHat,
  ShieldCheck,
  CreditCard,
  Monitor,
  Calculator,
  Award,
  TrendingUp,
  IndianRupee,
  MapPin,
  Clock,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Users,
  Heart,
  Building,
  Briefcase,
  HardHat,
  ShieldCheck,
  CreditCard,
  Monitor,
  Calculator,
  Award,
  TrendingUp,
  IndianRupee,
  MapPin,
  Clock,
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  const IconComponent = iconMap[name] || Scale;
  return <IconComponent className={className} />;
}

