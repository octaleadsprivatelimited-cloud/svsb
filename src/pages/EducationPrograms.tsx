import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProgramCard } from "@/components/common/Cards";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, School, Award, ArrowRight } from "lucide-react";

import educationImage from "@/assets/education-programs.jpg";


const programs = [
  {
    title: "Talent Development",
    description: "Co-Curricular Education Programs focused on nurturing artistic and creative talents in students.",
    features: [
      "Music & Vocal Training",
      "Dance & Performing Arts",
      "Drawing & Painting",
      "Drama & Theatre"
    ],
  },
  {
    title: "Skill Enhancement",
    description: "Programs designed to develop essential life skills and communication abilities.",
    features: [
      "Communication Skills",
      "Leadership Training",
      "Public Speaking & Debates",
      "Life Skills Workshops"
    ],
  },
  {
    title: "Sports & Yoga",
    description: "Physical fitness and mental well-being through sports and yoga activities.",
    features: [
      "Indoor & Outdoor Games",
      "Yoga & Meditation",
      "Physical Fitness Activities",
      "Discipline & Team Building"
    ],
  },
  {
    title: "Cultural & Creative Activities",
    description: "Promoting cultural awareness and creative expression through various activities.",
    features: [
      "Cultural Festivals & Events",
      "Traditional Arts & Crafts",
      "Value-Based Storytelling",
      "National & Social Awareness Programs"
    ],
  },
];

const EducationPrograms = () => {
  return (
    <Layout>
      <PageHero
        title="Education Programs"
        subtitle="Empowering through quality education for all"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Educational Programs
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Swami Vivekananda Seva Brundam believes that true education goes beyond textbooks and examinations. Inspired by the teachings of Swami Vivekananda, our educational programs focus on the <strong>holistic development of children and youth</strong>, nurturing not only their academic knowledge but also their talents, skills, character, and confidence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Along with academic support, we actively promote <strong>co-curricular activities</strong> such as arts, sports, music, yoga, debates, cultural programs, leadership activities, and life-skills training. These activities help students discover their hidden potential, enhance creativity, improve communication skills, and build teamwork and discipline.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our programs emphasize <strong>value-based education</strong>, moral ethics, self-reliance, and social responsibility. Through workshops, competitions, personality development sessions, and mentorship, we aim to shape individuals who are confident, skilled, and prepared to face real-life challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Swami Vivekananda Seva Brundam, education is a tool for <strong>character building and nation building</strong>, empowering young minds to become responsible citizens and future leaders.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button className="btn-primary">
                    Support Education
                  </Button>
                </Link>
                <Link to="/volunteer">
                  <Button className="btn-outline">
                    Volunteer as Teacher
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img src={educationImage} alt="Education Programs" className="w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-cream">
        <div className="container">
          <SectionTitle
            label="Our Programs"
            title="Co-Curricular Education Programs"
            subtitle="Comprehensive programs to address education needs at every level"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card-sharp p-8">
                <h3 className="font-heading text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EducationPrograms;
