import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";

const PrivacyPolicy = () => {
  return (
    <Layout showCTA={false}>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="card-sharp p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-6">
                We collect information you provide directly to us, such as when you make a donation, 
                sign up for our newsletter, register for events, or contact us. This may include 
                your name, email address, phone number, mailing address, and payment information.
              </p>

              <h2 className="font-heading text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-6">
                We use the information we collect to process donations, send you updates about our 
                programs and events, respond to your inquiries, and improve our services. We may 
                also use your information to send you promotional communications with your consent.
              </p>

              <h2 className="font-heading text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell, rent, or share your personal information with third parties for 
                their marketing purposes. We may share your information with service providers 
                who assist us in operating our website and conducting our operations.
              </p>

              <h2 className="font-heading text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction.
              </p>

              <h2 className="font-heading text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                info@ysvsb.org or +91 70135 70447.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
