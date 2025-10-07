interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex gap-4">
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        {number}
      </div>
      <div>
        <h4 className="mb-1">{title}</h4>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}