interface FeaturePillProps {
  label: string;
}

export function FeaturePill({ label }: FeaturePillProps) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand/8 text-brand border border-brand/15 whitespace-nowrap">
      {label}
    </span>
  );
}
