import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="inspecto-card p-6">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--background-tint)' }}>
        <Icon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </div>
  );
}