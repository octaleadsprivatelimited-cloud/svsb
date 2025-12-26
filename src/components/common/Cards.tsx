import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export const StatCard = ({ value, label, icon: Icon }: StatCardProps) => {
  return (
    <div className="stat-card group">
      {Icon && (
        <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
          <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={28} />
        </div>
      )}
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: LucideIcon;
}

export const ProgramCard = ({ title, description, image, link, icon: Icon }: ProgramCardProps) => {
  return (
    <div className="program-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {Icon && (
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary flex items-center justify-center">
            <Icon className="text-primary-foreground" size={28} />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        <a
          href={link}
          className="text-primary font-semibold text-sm uppercase tracking-wider hover-underline"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

export const TestimonialCard = ({ quote, name, role, image }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="absolute top-4 left-4 text-6xl text-primary/20 font-heading">"</div>
      <p className="text-foreground mb-6 relative z-10 italic">{quote}</p>
      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={name} className="w-12 h-12 object-cover" />
        ) : (
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <div className="font-bold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
};

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export const TeamCard = ({ name, role, image, description }: TeamCardProps) => {
  return (
    <div className="card-sharp overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-heading text-xl font-bold mb-1">{name}</h3>
        {role && <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">{role}</p>}
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
    </div>
  );
};
