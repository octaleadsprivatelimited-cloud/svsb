import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Annual Health Camp 2024",
    date: "January 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Kalwakurthy Community Center",
    description: "Free medical check-ups, eye screening, and medicine distribution.",
    status: "upcoming",
  },
  {
    title: "Women Skill Training Workshop",
    date: "December 20, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "SVSB Training Center",
    description: "Tailoring and handicraft training for rural women.",
    status: "completed",
  },
  {
    title: "Youth Career Fair",
    date: "November 25, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "District Collectorate Grounds",
    description: "Job fair connecting trained youth with employers.",
    status: "completed",
  },
];

const Events = () => {
  return (
    <Layout>
      <PageHero
        title="Events"
        subtitle="Stay updated with our programs and activities"
        breadcrumbs={[{ label: "Events" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className={`card-sharp p-6 ${event.status === 'upcoming' ? 'border-l-4 border-l-primary' : ''}`}>
                  {event.status === 'upcoming' && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 uppercase tracking-wider mb-3">
                      Upcoming
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
