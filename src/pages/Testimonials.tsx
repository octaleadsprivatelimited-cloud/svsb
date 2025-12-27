import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { TestimonialCard } from "@/components/common/Cards";

const testimonials = [
  {
    quote: "I am deeply grateful for the free medical camps conducted by Swami Vivekananda Seva Brundam in our village. Many families received checkups, medicines, and health advice that we could never afford. Their compassion and dedication to community health make a real difference.",
    name: "M. Naresh Goud",
    role: "Thotapally Village",
  },
  {
    quote: "The environmental awareness drives and tree-planting activities led by Swami Vivekananda Seva Brundam have brought positive change to our surroundings. They taught us the value of protecting nature and keeping our village clean. Their efforts encourage all of us to take part and care for the environment.",
    name: "M. Durga Prasad",
    role: "Kalwakurthy",
  },
  {
    quote: "I am a school teacher from Kerala, and during the difficult days of the COVID-19 pandemic, Swami Vivekananda Seva Brundam stood by me with great compassion and support. When my family faced financial and emotional stress due to the lockdown, their timely help through the donation of food supplies and essential household needs helped us survive those challenging times with dignity. Along with material support, their moral encouragement gave us strength and hope. Their selfless service showed true humanity, and I will always remain grateful for their kindness and dedication to society.",
    name: "Kerala Teacher",
    role: "School Teacher, Kerala",
  },
  {
    quote: "The agricultural training programs conducted by Swami Vivekananda Seva Brundam have been extremely beneficial for farmers like me. Through these sessions, we gained practical knowledge on modern farming techniques, soil health management, and efficient use of water and natural resources. After applying these methods in my fields, I noticed a significant improvement in crop yield and quality. These programs not only increased our productivity but also boosted our confidence and income. I sincerely appreciate their efforts in empowering farmers with knowledge and sustainable farming practices.",
    name: "Raja Shekar",
    role: "Farmer, Rangareddy District",
  },
  {
    quote: "I am an Anganwadi teacher, and I sincerely thank Swami Vivekananda Seva Brundam for their valuable support to our Anganwadi Kendra. They took the initiative to paint and renovate our center, creating a clean, bright, and child-friendly environment. The improved infrastructure has made a positive impact on children's learning, attendance, and overall health. A safe and hygienic space has also helped us provide better nutrition and health care services. Their selfless service has truly strengthened early childhood education in our community.",
    name: "Fathima Begum",
    role: "Anganwadi Teacher, Gandhinagar",
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
