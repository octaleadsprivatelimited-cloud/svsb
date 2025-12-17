interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle = ({ label, title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${light ? 'text-primary' : 'text-primary'}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-secondary-foreground' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-secondary-foreground/80' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-primary mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
