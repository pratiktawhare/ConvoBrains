interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm flex flex-col h-full">
      {/* Quote mark */}
      <div className="text-brand/20 text-5xl font-serif leading-none mb-3">&ldquo;</div>
      <blockquote className="text-lg text-navy italic leading-relaxed flex-1 mb-6">
        {quote}
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-semibold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-navy">{name}</div>
          <div className="text-xs text-neutral-mid">
            {title}, {company}
          </div>
        </div>
      </div>
    </div>
  );
}
