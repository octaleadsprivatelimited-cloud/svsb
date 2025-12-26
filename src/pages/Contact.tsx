import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 70135 70447"],
    link: "tel:+917013570447",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@ysvsb.org"],
    link: "mailto:info@ysvsb.org",
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "H No 6-113, Gandhinagar,",
      "Kalwakurthy Village & Mandal,",
      "Nagarkurnool District,",
      "Telangana State – 509324",
    ],
    link: "https://maps.app.goo.gl/PeRDRhnsbLHF8Cpo6",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We will get back to you within 24-48 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us today."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our programs, want to volunteer, or need assistance 
                with donations? Reach out to us through any of the following channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                        >
                          {item.details.map((detail, i) => (
                            <span key={i}>{detail} </span>
                          ))}
                          <span className="text-primary text-xs block mt-1">📍 View on Google Maps</span>
                        </a>
                      ) : (
                        <div className="text-muted-foreground text-sm">
                          {item.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917013570447?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Swami%20Vivekananda%20Seva%20Brundam."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 font-semibold hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-sharp p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-background focus:border-primary focus:outline-none ${
                          errors.name ? "border-destructive" : "border-border"
                        }`}
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-background focus:border-primary focus:outline-none ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-background focus:border-primary focus:outline-none ${
                          errors.phone ? "border-destructive" : "border-border"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border bg-background focus:border-primary focus:outline-none ${
                          errors.subject ? "border-destructive" : "border-border"
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Donation">Donation</option>
                        <option value="Volunteer">Volunteer Opportunity</option>
                        <option value="CSR Partnership">CSR Partnership</option>
                        <option value="Media">Media Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border bg-background focus:border-primary focus:outline-none resize-none ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Write your message here..."
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">Visit our office at Kalwakurthy, Telangana</p>
          </div>
          <div className="card-sharp overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60910.11657367063!2d78.42945831298828!3d16.62714849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d6f5b00003f%3A0x10c0f2e55c2c6e48!2sKalwakurthy%2C%20Telangana!5e0!3m2!1sen!2sin!4v1702800000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
            <div className="p-4 bg-background text-center border-t border-border">
              <a 
                href="https://maps.app.goo.gl/PeRDRhnsbLHF8Cpo6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
