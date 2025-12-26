import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Swamivivekananda Seva Brundam?",
    answer: "Swamivivekananda Seva Brundam is a registered charitable trust working for the holistic development of rural communities in Telangana. We focus on education, healthcare, women empowerment, youth development, and sustainable rural development.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, all donations to SVSB are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive an 80G receipt for your donation.",
  },
  {
    question: "How can I donate?",
    answer: "You can donate through multiple channels: online payment on our website, bank transfer, UPI, or cheque. Visit our Donate page for detailed information on payment methods.",
  },
  {
    question: "How is my donation used?",
    answer: "Your donation is used directly for our programs including education support, healthcare camps, women skill training, and youth development. We maintain complete transparency and publish annual reports detailing fund utilization.",
  },
  {
    question: "Can I volunteer with SVSB?",
    answer: "Yes, we welcome volunteers! You can contribute your time and skills in various areas like teaching, healthcare support, documentation, fundraising, and more. Visit our Volunteer page to learn more.",
  },
  {
    question: "Does SVSB accept CSR partnerships?",
    answer: "Yes, we actively partner with corporates for CSR initiatives. Our programs are compliant with CSR guidelines under the Companies Act 2013. Contact us to discuss partnership opportunities.",
  },
  {
    question: "Which areas does SVSB work in?",
    answer: "We primarily work in rural areas of Nagarkurnool and surrounding districts in Telangana. Our programs reach over 100 villages across the state.",
  },
  {
    question: "How can I stay updated on SVSB's work?",
    answer: "Follow us on social media, subscribe to our newsletter, or visit our website regularly for updates on our programs, events, and impact stories.",
  },
];

const FAQs = () => {
  return (
    <Layout>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our organization"
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-sharp px-6">
                  <AccordionTrigger className="text-left font-heading font-bold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
