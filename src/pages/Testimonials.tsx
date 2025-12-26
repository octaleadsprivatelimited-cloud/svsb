import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { TestimonialCard } from "@/components/common/Cards";

const testimonials = [
  {
    quote: "Swamivivekananda Seva Brundam transformed our village. My children now have access to quality education and healthcare that we could never have imagined before.",
    name: "Lakshmi Devi",
    role: "Beneficiary, Kalwakurthy Village",
  },
  {
    quote: "The skill development program gave me the confidence and training to start my own tailoring business. I am now financially independent and can support my family.",
    name: "Padma Kumari",
    role: "Women Empowerment Program",
  },
  {
    quote: "As a volunteer, working with SVSB has been the most fulfilling experience of my life. The dedication to rural communities is truly inspiring.",
    name: "Rajesh Kumar",
    role: "Volunteer, Hyderabad",
  },
  {
    quote: "The computer training I received from SVSB helped me get a job in the city. Now I can help my family and also give back to my village.",
    name: "Suresh Reddy",
    role: "Youth Development Program",
  },
  {
    quote: "The medical camp saved my mother's eyesight. We could never afford the surgery, but SVSB made it possible. We are forever grateful.",
    name: "Venkatesh",
    role: "Healthcare Beneficiary",
  },
  {
    quote: "Our self-help group has transformed our lives. We have learned to save, start small businesses, and become independent women.",
    name: "Saraswathi",
    role: "SHG Member",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      <PageHero
        title="Testimonials"
        subtitle="Stories of transformation and hope"
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
