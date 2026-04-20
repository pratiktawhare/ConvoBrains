interface EyebrowTagProps {
  label: string;
  dark?: boolean;
}

export function EyebrowTag({ label, dark = false }: EyebrowTagProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-4 ${
        dark
          ? "bg-brand/15 text-accent border border-brand/20"
          : "bg-brand/10 text-brand border border-brand/15"
      }`}
    >
      {label}
    </span>
  );
}
